
// Styles
import styles from '../styles/BackgroundPink.module.css';

// Icons
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import close from '../assets/icons/close.png';

// Images
import strawberry from '../assets/images/strawberry.png';


function BackgroundPink({ children }) {
  return (
    <div className={styles.background_pink}>
      <img src={strawberry} alt="Morango fofo" className={`${styles.floating_strawberry} float1`} />
      <img src={icon2} alt="Ícone bonito" className={`${styles.floating_lay} float3`} />
      <img src={icon3} alt="Estrela grande" className={`${styles.floating_fly} float2`} />
      <img src={strawberry} alt="Outro morango" className={`${styles.floating_strawberry1} float3`} />
      <div>{children}</div>
    </div>
  );
}

export default BackgroundPink;