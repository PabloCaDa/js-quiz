import "./App.css";
import { Container } from "@mui/material";
import { Game, Start, Title } from "./components";
import { useQuestionsStore } from "./store/questions";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  return (
    <Container maxWidth="sm">
      <Title />
      {questions.length === 0 ? <Start /> : <Game />}
    </Container>
  );
}

export default App;
