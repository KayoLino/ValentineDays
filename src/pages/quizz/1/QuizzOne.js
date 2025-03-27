import Quiz from '../../../components/Quiz';

function QuizzOne() {
  return (
    <Quiz
      title="QUIZZ"
      question="Como me comportei no nosso primeiro encontro?"
      options={[
        "Estava muito extrovertido e empolgado.",
        "Estava muito tímido e quieto.",
        "Tentei pagar a conta, mas acabei deixando o cartão em casa.",
        "Comi algo que não gosto só pra impressionar você."
      ]}
      correctOption="Estava muito tímido e quieto."
      nextRoute="/quizz/2"
    />
  );
}

export default QuizzOne;
