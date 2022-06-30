import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircleIcon from "@mui/icons-material/Circle";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AlignCenter from "../../view/atoms/AlignCenter";
import LockOpenIcon from '@mui/icons-material/LockOpen';

const DEFAULT_ICON = CircleIcon;
const LABEL_TO_ICON = {
  "Vehicle Number": DirectionsCarFilledIcon,
  Priority: LowPriorityIcon,
  "Time Expiry": AccessTimeIcon,
  "Time Created": MoreTimeIcon,
  "Public Key": LockOpenIcon,
};

export default function LabelledText({ label, text, color, noLabel }) {
  let Icon = LABEL_TO_ICON[label];
  if (!Icon) {
    Icon = DEFAULT_ICON;
  }
  if (noLabel) {
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
  } else {
    return (
      <Box sx={{ p: 0.5 }}>
        <Typography variant="subtitle1" sx={{ fontSize: "67%" }}>
          {label}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "133%", color, wordWrap: "break-word" }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
}
