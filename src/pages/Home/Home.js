
// Styles
import styles from './Home.module.css';

// Icons
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';

// Images
import profile from '../../assets/images/profile.png'

// Hooks
import { useState } from 'react';

// Router 
import { useNavigate } from 'react-router-dom';

function Home() {

  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const handleDateInput = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length > 4) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
    }

    setDate(value);
  };

  const handleDate = () => {
    if (date === '') {
      setError("Coloque a data >:(");
      return;
    }
    if (date !== '24/03/2023') {
      setError("COMO ASSIM VOCÊ NÃO SABE?");
      return;
    }

    setClicked(true);
    setTimeout(() => {
      navigate('/howplay');
    }, 600);
  }

  return (
    <div className={styles.background_home}>

      <div className={styles.container_home}>
        <img src={icon1} className={styles.floating_icon1} alt="Icon 1" />
        <img src={icon2} className={styles.floating_icon2} alt="Icon 2" />
        <img src={icon3} className={`${styles.floating_icon3} float1`} alt="Icon 3" />

        <div className={styles.section_home}>
          <h1 className={styles.title_home}>Bem vinda Jubeba {"<3"}</h1>
          <img src={profile} className={styles.profile_image} alt="Profile" />
          <input
            type="text"
            value={date || ''}
            onChange={handleDateInput}
            className={styles.input_home}
            placeholder="Digite nosso aniversário"
          />
          <button className={`${styles.button_home} ${clicked ? styles.clicked : ''}`} onClick={handleDate}>
            <div className={styles.ball}></div>
            Entrar
          </button>
          {error && <p className={styles.error_home}>{error}</p>}
        </div>
      </div>
    </div >
  );
}

export default Home;