import { Card } from "@mui/material";
import { Question as QuestionType } from "../types";

import { AnswersList } from "./AnswersList";
import { Question } from "./Question";

export const QuestionCard = ({ info }: { info: QuestionType }) => {
  return (
    <Card
      variant="outlined"
      sx={{ textAlign: "left", bgcolor: "#222", p: 2, marginTop: 4 }}
    >
      <Question question={info.question} code={info.code} />
      <AnswersList questionInfo={info} />
    </Card>
  );
};
