import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircleIcon from "@mui/icons-material/Circle";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

import { t } from "../../nonview/base/I18N";

import AlignCenter from "../../view/atoms/AlignCenter";

const DEFAULT_ICON = CircleIcon;
const LABEL_TO_ICON = {
  "Vehicle Number": DirectionsCarFilledIcon,
  Priority: LowPriorityIcon,
  Expiration: AccessTimeIcon,
  Creation: MoreTimeIcon,
  "Public Key": LockOpenIcon,
  "Secret Key": LockIcon,
};

export default function IconLabel({ label, star }) {
  let Icon = LABEL_TO_ICON[label];
  if (!Icon) {
    Icon = DEFAULT_ICON;
  }

  const starStr = star ? "*" : "";
  return (
    <AlignCenter>
      <Icon sx={{ opacity: 0.33 }} />
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        {t(label) + starStr}
      </Typography>
    </AlignCenter>
  );
}

// import IconLabel from "../../view/atoms/IconLabel";
