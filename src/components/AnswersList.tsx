import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Question } from "../types";
import { useQuestionsStore } from "../store/questions";

export const AnswersList = ({ questionInfo }: { questionInfo: Question }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);
  const {
    answers,
    id: questionId,
    userSelectedAnswer,
    isCorrectUserAnswer,
    correctAnswer,
  } = questionInfo;

  console.log({ questionInfo });

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(questionId, answerIndex);
  };

  const getBackgroundColor = (index: number) => {
    console.log("userSelectedAnswer", userSelectedAnswer);
    console.log("index", index);

    if (userSelectedAnswer === null || userSelectedAnswer === undefined) {
      return "transparent";
    }
    if (userSelectedAnswer === index) {
      return isCorrectUserAnswer ? "green" : "red";
    }

    if (userSelectedAnswer !== index && index === correctAnswer) {
      return "green";
    }

    if (index === questionInfo.correctAnswer) {
      return "green";
    }

    return "transparent";
  };

  return (
    <List sx={{ bgcolor: "#333" }} disablePadding>
      {answers.map((answer, index) => (
        <ListItem
          key={index}
          sx={{ bgcolor: getBackgroundColor(index) }}
          disablePadding
          divider
        >
          <ListItemButton
            onClick={createHandleClick(index)}
            disabled={!!userSelectedAnswer || userSelectedAnswer === 0}
          >
            <ListItemText
              primary={answer}
              sx={{ fontWeight: 500, textAlign: "center" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
