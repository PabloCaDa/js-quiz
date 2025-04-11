import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

interface PaginationProps {
  current: number;
  goPrevious: () => void;
  goNext: () => void;
  total: number;
}

export const Pagination = ({
  current,
  goPrevious,
  goNext,
  total,
}: PaginationProps) => {
  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 2 }}
    >
      <IconButton onClick={goPrevious} disabled={current === 0}>
        <ArrowBackIosNew />
      </IconButton>
      <span>
        {current + 1} / {total}
      </span>
      <IconButton onClick={goNext} disabled={current >= total - 1}>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  );
};
