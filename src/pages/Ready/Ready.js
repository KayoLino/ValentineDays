// Styles
import styles from './Ready.module.css'
import titleButtonStyles from '../../styles/TitleButton.module.css'

// Components
import BackgroundPink from '../../components/BackgroundPink';

// Images
import me from '../../assets/images/me.png';

// Hooks
import { useNavigate } from 'react-router-dom';

function Ready() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/quizz/1');
  }

  return (
    <BackgroundPink>
      <div className={styles.section_ready}>
        <h1>QUIZZ {"<3"}</h1>
        <img src={me} alt="Eu" />
        <p>Hora de testar os seus conhecimentos</p>
        <p>{">:)"}</p>
        <button onClick={handleNavigate}>Jogar</button>
      </div>
    </BackgroundPink>
  );
}
export default Ready;
