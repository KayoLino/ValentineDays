// Styles
import styles from './HowPlay.module.css'
import titleButtonStyles from '../../styles/TitleButton.module.css'

// Icons
import star1 from '../../assets/icons/estrela1.png';
import star2 from '../../assets/icons/estrela2.png';
import star3 from '../../assets/icons/estrela3.png';
import star4 from '../../assets/icons/estrela4.png';

// Components
import ContainerBox from '../../components/ContainerBox';
import TitleButton from '../../components/TitleButton';
import Loading from '../../components/Loading';

// Hooks
import { useState, useEffect } from 'react';

function HowPlay() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <ContainerBox>
      <TitleButton title={"Como jogar"} setClass={titleButtonStyles.title_white} />
      <div>
        <ul className={styles.section_howplay}>
          <li>
            <img src={star1} alt="Estrela 1" />
            <p className={styles.text_howplay}>Responda todas as 5 perguntas.</p>
          </li>
          <li>
            <img src={star2} alt="Estrela 2" />
            <p className={styles.text_howplay}>Passe o Puzzle {">:)"}</p>
          </li>
          <li>
            <img src={star3} alt="Estrela 3" />
            <p className={styles.text_howplay}>Aproveite todas as fofuras e boiolagens.</p>
          </li>
          <li>
            <img src={star4} alt="Estrela 4" />
            <p className={styles.text_howplay}>Escute a música com fones de ouvido.</p>
          </li>
        </ul>
      </div>

    </ContainerBox>
  );
}

export default HowPlay;