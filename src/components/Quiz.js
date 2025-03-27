// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import BackgroundPink from '../components/BackgroundPink';

// Styles
import styles from '../styles/Quiz.module.css';

// Icons
import star1 from '../assets/icons/estrela1.png';
import star2 from '../assets/icons/estrela2.png';
import star3 from '../assets/icons/estrela3.png';
import star4 from '../assets/icons/estrela4.png';

function Quiz({ title, question, options, correctOption, nextRoute }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === correctOption) {
      setIsCorrect(true);
      setTimeout(() => {
        navigate(nextRoute);
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  const stars = [star1, star2, star3, star4];

  return (
    <BackgroundPink>
      <div className={styles.container_quiz}>
        <h1>{title} {"<3"}</h1>
        <p>{question}</p>
        <div className={styles.section_quiz}>
          {options.map((option, index) => (
            <div
              className={styles.options_quiz}
              key={index}
              onClick={() => handleAnswerClick(option)}
              style={{
                backgroundColor: selectedAnswer === option ? (isCorrect ? '#61CB65' : '#E65151') : '',
              }}
            >
              <img src={stars[index]} alt="Estrela" />
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundPink>
  );
}

export default Quiz;
