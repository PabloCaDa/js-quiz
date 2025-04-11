import { Button, Stack } from "@mui/material";
import { useQuizScore } from "../hooks";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  const { correctAnswers, incorrectAnswers } = useQuizScore();

  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "20px", textAlign: "center" }}>
      <Stack direction="column" gap={2} alignItems="center">
        <Stack direction="row" gap={2} alignItems="center">
          <strong>{`✅:  ${correctAnswers}`}</strong>
          <strong>{`❌: ${incorrectAnswers}`}</strong>
        </Stack>
      </Stack>
      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        color="error"
        onClick={() => reset()}
      >
        Reset
      </Button>
    </footer>
  );
};
