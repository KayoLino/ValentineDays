import BackgroundPink from '../../../components/BackgroundPink';
import Quiz from '../../../components/Quiz'

function QuizzTwo() {
  return (
    <Quiz
      title={`QUIZZ`}
      question="O que voce acha que eu faria se ganhasse na loteria agora?"
      options={
        [
          "Compraria uma ilha e me mudaria para la.",
          "Investiria tudo em viagens para todos os lugares que a gente ja sonhou em conhecer.",
          "Apostaria tudo no tigrinho (sem motivo nenhum).",
          "Faria uma festa e jogaria o resto do dinheiro no lixo so pra ver a reação das pessoas."
        ]}
      correctOption="Investiria tudo em viagens para todos os lugares que a gente ja sonhou em conhecer."
      nextRoute="/quizz/3"
    />
  );
}

export default QuizzTwo;