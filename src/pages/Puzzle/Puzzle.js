// Hooks
import { useState, useEffect } from "react";

// Router
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './Puzzle.module.css';

// Images
import presente from '../../assets/images/presente.png';
import risos from '../../assets/images/risos.png';
import lugar from '../../assets/images/lugar.png';

// Gifs
import kissing from '../../assets/gifs/kissing.gif';
import waiting from '../../assets/gifs/waiting.gif';

// Components 
import ContainerWhite from '../../components/ContainerWhite';

const images = [
  { id: 1, src: presente, correctSlot: "slot1" },
  { id: 2, src: risos, correctSlot: "slot2" },
  { id: 3, src: lugar, correctSlot: "slot3" },
];


export default function PuzzleGame() {
  const [slots, setSlots] = useState({});
  const [count, setCount] = useState(0);
  const [analysing, setAnalysing] = useState(false);
  const [happy, setHappy] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 3) {
      setAnalysing(true);

      setTimeout(() => {
        setAnalysing(false);
        setHappy(true);
      }, 4000);

      setTimeout(() => {
        navigate('/cute');
      }, 10000);
    }
  }, [count]);


  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("imageId", String(id));
  };

  const handleDrop = (e, slotId) => {
    e.preventDefault();
    const imageId = e.dataTransfer.getData("imageId");
    const draggedImage = images.find((img) => img.id == imageId);

    if (!draggedImage) return;

    if (draggedImage.correctSlot === slotId) {
      setSlots((prev) => ({ ...prev, [slotId]: draggedImage }));
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      {analysing === true ? (
        <div className={styles.overlay_puzzle}>
          <img src={waiting} />
          <p>Analisando...</p>
        </div>
      ) : <></>}

      {happy && (
        <div className={styles.overlay_puzzle}>
          <img src={kissing} />
          <p>Parabéns amooor!!</p>
        </div>
      )}

      <ContainerWhite>
        {/* Área das imagens */}
        <div className={count === 3 ? '' : styles.imgContainer_puzzle}>
          {images.map((img) => (
            !Object.values(slots).some(slot => slot.id === img.id) && (
              <img
                className={styles.puzzle_image}
                key={img.id}
                src={img.src}
                alt="puzzle-piece"
                draggable
                onDragStart={(e) => handleDragStart(e, img.id)}
              />
            )
          ))}
        </div>

        <div className={styles.slotsContainer}>

          <div>
            <div
              className={styles.slot}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, "slot1")}
            >
              {slots.slot1 ? (
                <img src={slots.slot1.src} alt="slot1" className={styles.puzzle_image} />
              ) : (
                <span>Solte aqui</span>
              )}
            </div>
            <p>Aquele presente que te fez sorrir mais do que esperava</p>
          </div>

          <div>
            <p className={styles.mid_text}>O dia em que descobrimos um dos nossos lugares favoritos.</p>
            <div
              className={styles.slot}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, "slot2")}
            >
              {slots.slot2 ? (
                <img src={slots.slot2.src} alt="slot2" className={styles.puzzle_image} />
              ) : (
                <span>Solte aqui</span>
              )}
            </div>
          </div>

          <div>
            <div
              className={styles.slot}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, "slot3")}
            >
              {slots.slot3 ? (
                <img src={slots.slot3.src} alt="slot3" className={styles.puzzle_image} />
              ) : (
                <span>Solte aqui</span>
              )}
            </div>
            <p>O dia em que rimos tanto que esquecemos do tempo.</p>
          </div>

        </div>

      </ContainerWhite>
    </>
  );
}
