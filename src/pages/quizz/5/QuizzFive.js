import BackgroundPink from '../../../components/BackgroundPink';
import Quiz from '../../../components/Quiz'

function QuizzFive() {
  return (
    <Quiz
      title={`Kizz`}
      question="Qual é o meu superpoder secreto (que talvez nem eu saiba que tenho)?"
      options={
        [
          "Eu sempre sei quando você precisa de um abraço, antes mesmo de você pedir.",
          "Eu consigo achar o lugar perfeito no restaurante sem nem olhar o cardápio.",
          "Eu tenho o poder de adivinhar qual música vai tocar no momento exato.",
          "Eu sempre sei quando você está com fome, antes mesmo de você perceber."
        ]}
      correctOption="Eu sempre sei quando você precisa de um abraço, antes mesmo de você pedir."
      nextRoute="/congratulations"
    />
  );
}

export default QuizzFive;