// Gif
import rabbit from '../assets/gifs/rabbit.gif';

// Styles
import styles from '../styles/Loading.module.css'

function Loading() {
  return (
    <div className={styles.background_loading}>
      <div className={styles.container_loading}>
        <img src={rabbit} alt="Coelho girando" />
        <p className={styles.text_loading}>Carregando...</p>
      </div>
    </div>
  );
}

export default Loading;