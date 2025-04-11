import { useQuestionsStore } from "../store/questions";
import { QuestionCard } from "./QuestionCard";

import { Pagination } from "./Pagination";
import { Footer } from "./Footer";

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Pagination
        current={currentQuestion}
        total={questions.length}
        goPrevious={goPreviousQuestion}
        goNext={goNextQuestion}
      />
      <QuestionCard info={questionInfo} />
      <Footer />
    </>
  );
};
