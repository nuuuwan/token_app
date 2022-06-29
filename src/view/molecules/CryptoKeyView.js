import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";

import AlignCenter from "../../view/atoms/AlignCenter";

const STYLE_KEY = {
  wordBreak: "break-all",
};

const PUBLIC_MESSAGE = [
  "This is your Public Key (green).",
  "Other people will use this key to verify tokens issued by you.",
  "Please share this key in a public place.",
].join(" ");

const PRIVATE_MESSAGE = [
  "This is your Secret Key (red).",
  "You will use this key to generate tokens.",
  "Please DO NOT SHARE this key with anyone.",
  "Copy this key and save it in a SAFE PLACE.",
].join(" ");

const cryptoKeyTypeToConfig = {
  [CRYPTO_KEY_TYPE.PUBLIC]: {
    color: "darkgreen",
    label: "Public",
    message: PUBLIC_MESSAGE,
    Icon: LockOpenIcon,
    severity: "success",
  },
  [CRYPTO_KEY_TYPE.SECRET]: {
    color: "maroon",
    label: "Secret",
    message: PRIVATE_MESSAGE,
    Icon: LockIcon,
    severity: "error",
  },
};

export default function CryptoKeyView({ cryptoKey, cryptoKeyType }) {
  if (!cryptoKey) {
    return null;
  }

  const { color, label, message, Icon, severity } =
    cryptoKeyTypeToConfig[cryptoKeyType];

  return (
    <Stack spacing={2}>
      <Typography variant="h6" color={color}>
        {label + " Key"}
      </Typography>
      <Paper sx={{ m: 1, p: 2 }} color="inherit">
        <AlignCenter>
          <Icon sx={{ color }} />
          <Typography variant="body1" style={STYLE_KEY} color={color}>
            {cryptoKey}
          </Typography>
        </AlignCenter>
      </Paper>
      <Alert severity={severity} sx={{ color }}>
        {message}
      </Alert>
    </Stack>
  );
}

// import CryptoKeyView from "../../view/atoms/CryptoKeyView";
