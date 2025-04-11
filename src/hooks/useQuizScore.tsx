import { useQuestionsStore } from "../store/questions";

export const useQuizScore = () => {
  const questions = useQuestionsStore((state) => state.questions);

  let incorrectAnswers = 0;
  let correctAnswers = 0;

  questions.forEach(({ userSelectedAnswer, correctAnswer }) => {
    const isAnswered =
      userSelectedAnswer !== undefined && userSelectedAnswer !== null;

    if (userSelectedAnswer === correctAnswer) {
      correctAnswers++;
    } else if (isAnswered) {
      incorrectAnswers++;
    }
  });

  return {
    correctAnswers,
    incorrectAnswers,
  };
};
