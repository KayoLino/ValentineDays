// Styles
import styles from './Cute.module.css'
import titleButtonStyles from '../../styles/TitleButton.module.css'

// Icons
import star1 from '../../assets/icons/estrela1.png';
import star2 from '../../assets/icons/estrela2.png';
import star3 from '../../assets/icons/estrela3.png';
import star4 from '../../assets/icons/estrela4.png';
import back from '../../assets/icons/seta.png'


// Components
import ContainerWhite from '../../components/ContainerWhite';
import TitleButton from '../../components/TitleButton';
import LoadingWhite from '../../components/LoadingWhite';

// Hooks
import { useState, useEffect } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

function Cute() {

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
      <div className={styles.container_cute}>
        <h2>Ebaaaa {"<3"}</h2>

        <div>
          <p>Boa meu amooor, conseguiu  mais uma vez acertar tudo!!</p>
        </div>
        <div>
          <p>Quero que saiba que vc é tudo pra mim, a coisa mais importante que tenho e quero vc pra sempre, parabens pelos nossos 2 aninhos juntos {"<3"} que venham mais mil rsrs</p>
        </div>

        <button onClick={() => navigate('/music')}>Ouvir música</button>

      </div>

    </ContainerWhite>
  );
}

export default Cute;