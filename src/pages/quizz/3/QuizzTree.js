import BackgroundPink from '../../../components/BackgroundPink';
import Quiz from '../../../components/Quiz'

function QuizzTree() {
  return (
    <Quiz
      title={`QUIZZ`}
      question="Qual foi o meu maior “mimo” que voce jamais imaginou que eu faria por voce?"
      options={
        [
          "Eu te surpreendi com um jantar surpresa em casa, mesmo sem saber cozinhar.",
          "Eu criei um sitezinho fofo pra voce desfrutar e curtir ;)",
          "Eu escrevi uma carta de amor e a enviei pelo correio, mesmo no meio da correria.",
          "Eu montei um album de fotos (sem saber nada de design) só pra te emocionar."
        ]}
      correctOption="Eu criei um sitezinho fofo pra voce desfrutar e curtir ;)"
      nextRoute="/quizz/4"
    />
  );
}

export default QuizzTree;