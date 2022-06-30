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
      <AlignCenter>
        <Tooltip title={label}>
          <Icon sx={{ opacity: 0.33}} />
        </Tooltip>
        <Typography
          variant="h6"
          sx={{  color, wordWrap: "break-word" }}
        >
          {text}
        </Typography>
      </AlignCenter>
    );
  } else {
    return (
      <Box sx={{ p: 0.5 }}>

        <AlignCenter>
          <Icon sx={{ opacity: 0.33 }} />
          <Typography variant="caption" sx={{opacity: 0.5 }}>
            {label}
          </Typography>
        </AlignCenter>

        <Typography
          variant="h6"
          sx={{  color, wordWrap: "break-word" }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
}
