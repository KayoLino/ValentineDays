// Styles
import styles from './Congratulations.module.css'
import titleButtonStyles from '../../styles/TitleButton.module.css'

// Icons
import star1 from '../../assets/icons/estrela1.png';
import star2 from '../../assets/icons/estrela2.png';
import star3 from '../../assets/icons/estrela3.png';
import star4 from '../../assets/icons/estrela4.png';
import back from '../../assets/icons/seta.png'

// Images
import meHappy from '../../assets/images/meHappy.png';

// Components
import ContainerWhite from '../../components/ContainerWhite';
import TitleButton from '../../components/TitleButton';
import LoadingWhite from '../../components/LoadingWhite';

// Hooks
import { useState, useEffect } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

function Congratulations() {

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  if (loading) {
    return (
      <LoadingWhite />
    );
  }

  return (
    <ContainerWhite>
      <div className={styles.section_congratulations}>
        <img src={back}
          alt="Voltar"
          className={styles.back_congratulations}
          onClick={() => navigate('/quizz/5')}
        />
        <img src={meHappy} alt="Eu Feliz" />
        <p>Parabens!! Voce acertou todas as perguntas. Porem nao deve ter notado que tem um easter egg na ultima fase >:)</p>
        <div>
          <img src={star1} alt="Estrela 1" />
          <img src={star2} alt="Estrela 2" />
          <img src={star3} alt="Estrela 3" />
          <img src={star4} alt="Estrela 4" />
        </div>
        <button onClick={() => navigate('/puzzle')}>Puzzle</button>
      </div>

    </ContainerWhite>
  );
}

export default Congratulations;