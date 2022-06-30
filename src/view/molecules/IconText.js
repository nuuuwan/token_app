import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

import AlignCenter from "../../view/atoms/AlignCenter";

const LABEL_TO_ICON = {
  "Vehicle Number": DirectionsCarFilledIcon,
  Priority: LowPriorityIcon,
  "Time Expiry": AccessTimeIcon,
};

export default function IconText({ label, text, color }) {
  const Icon = LABEL_TO_ICON[label];
  return (
    <Box>
      <AlignCenter>
        <Tooltip title={label}>
          <Icon sx={{ color, opacity: 0.5 }} />
        </Tooltip>
        <Typography
          variant="body1"
          sx={{ fontSize: "133%", color, wordWrap: "break-word" }}
        >
          {text}
        </Typography>
      </AlignCenter>
    </Box>
  );
}
