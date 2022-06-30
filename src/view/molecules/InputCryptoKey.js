import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import Validate from "../../nonview/core/Validate";

import AlignCenter from "../../view/atoms/AlignCenter";
import LabelledTextInput from "../../view/molecules/LabelledTextInput";

const PUBLIC_MESSAGE = [
  "This is your Public Key.",
  "Other people will use this key to verify tokens issued by you.",
  "Please share this key in a public place.",
].join(" ");

const PRIVATE_MESSAGE = [
  "This is your Secret Key.",
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
  },
  [CRYPTO_KEY_TYPE.SECRET]: {
    color: "maroon",
    label: "Secret",
    message: PRIVATE_MESSAGE,
    Icon: LockIcon,
  },
};

export default function InputCryptoKey({
  selectedCryptoKey,
  onChangeCryptoKey,
  cryptoKeyType,
}) {
  if (!selectedCryptoKey) {
    selectedCryptoKey = "";
  }
  let severity, alertText;

  const { color, label, message, Icon } = cryptoKeyTypeToConfig[cryptoKeyType];

  if (selectedCryptoKey.toString().trim().length === 0) {
    severity = "error";
    alertText = `A ${label} Key is required to generate a token.`;
  } else if (Validate.cryptoKey(selectedCryptoKey)) {
    severity = "success";
    alertText = "Looks good! " + message;
  } else {
    severity = "error";
    alertText = "A valid CryptoKey value must be 44 characters long.";
  }

  return (
    <Box>
      <LabelledTextInput
        label={
          <AlignCenter>
            <Icon sx={{ fontSize: "100%" }} />
            <Typography sx={{ fontSize: "100%" }}>{label + " Key"}</Typography>
          </AlignCenter>
        }
        text={selectedCryptoKey.toString()}
        onChange={onChangeCryptoKey}
        multiline
        color={color}
      />
      <Alert severity={severity}>{alertText}</Alert>
    </Box>
  );
}