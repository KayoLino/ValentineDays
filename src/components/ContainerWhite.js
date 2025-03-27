import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from '../styles/ContainerWhite.module.css';

// Icons
import icon2 from '../assets/icons/icon2.png';
import back from '../assets/icons/seta.png';

// Images
import bigStar from '../assets/images/bigStar.png';
import strawberry from '../assets/images/strawberry.png';

function ContainerWhite({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.background_pink}>
      <div className={`${styles.container} ${isOpen ? 'scale' : 'close'}`}>

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

export default ContainerWhite;
