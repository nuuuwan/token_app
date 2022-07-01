import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TimeX from "../../nonview/base/TimeX";

export default function TimeView({ ut }) {
  return (
    <Stack direction="column" spacing={-1}>
      <Typography variant="subtitle1">{TimeX.getHumanTime(ut)}</Typography>
      <Typography variant="caption">{TimeX.formatTime(ut)}</Typography>
    </Stack>
  );
}

// import TimeView from "../../view/atoms/TimeView";
