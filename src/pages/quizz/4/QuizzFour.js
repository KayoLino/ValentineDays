import BackgroundPink from '../../../components/BackgroundPink';
import Quiz from '../../../components/Quiz'

function QuizzFour() {
  return (
    <Quiz
      title={`QUIZZ`}
      question="Qual o mascote que eu mais quero ter atualmente?"
      options={
        [
          "Um gato preto.",
          "Um pastor alemao.",
          "Um papagaio.",
          "UM SALSICHINHA <3 S2 "
        ]}
      correctOption="UM SALSICHINHA <3 S2 "
      nextRoute="/quizz/5"
    />
  );
}

export default QuizzFour;