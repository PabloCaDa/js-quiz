import { useQuestionsStore } from "../store/questions";

export const useQuizScore = () => {
  const questions = useQuestionsStore((state) => state.questions);

  let incorrectAnswers = 0;
  let correctAnswers = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;

    if (userSelectedAnswer === correctAnswer) correctAnswers++;
    if (userSelectedAnswer !== correctAnswer) incorrectAnswers++;
  });

  return {
    correctAnswers,
    incorrectAnswers,
  };
};
