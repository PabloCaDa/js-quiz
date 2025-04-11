import { Stack, Typography } from "@mui/material";
import { JavascriptLogo } from "./JavascriptLogo";

export const Title = () => {
  return (
    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
      <JavascriptLogo />
      <Typography variant="h2" component="h1">
        Javascript Quiz
      </Typography>
    </Stack>
  );
};
