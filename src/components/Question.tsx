import { Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Question = ({
  question,
  code,
}: {
  question: string;
  code: string;
}) => {
  return (
    <>
      <Typography variant="h5">{question}</Typography>

      <SyntaxHighlighter language="javascript" style={nord}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};
