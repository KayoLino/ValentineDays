import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação

// Styles
import styles from '../styles/ContainerBox.module.css';

// Icons
import icon2 from '../assets/icons/icon2.png';
import close from '../assets/icons/close.png';

// Images
import bigStar from '../assets/images/bigStar.png';
import strawberry from '../assets/images/strawberry.png';

function ContainerBox({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleCloseWindow = () => {
    setIsOpen(false);

    setTimeout(() => {
      navigate('/ready');
    }, 400);
  };

  return (
    <div className={styles.background_pink}>
      <div className={`${styles.container} ${isOpen ? 'scale' : 'close'}`}>
        <img
          src={close}
          alt="Fechar"
          className={`${styles.close_howplay} ${!isOpen ? styles.close : ''}`}
          onClick={handleCloseWindow}
        />

        <img src={strawberry} alt="Morango fofo" className={`${styles.floating_strawberry} float1`} />
        <img src={icon2} alt="Ícone bonito" className={styles.floating_lay} />
        <img src={bigStar} alt="Estrela grande" className={`${styles.floating_bigStar} float2`} />
        <img src={strawberry} alt="Outro morango" className={`${styles.floating_strawberry1} float3`} />
        <div className={styles.section}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContainerBox;
