import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

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
  },
  [CRYPTO_KEY_TYPE.SECRET]: {
    color: "maroon",
    label: "Secret",
    message: PRIVATE_MESSAGE,
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

  const { color, label, message } = cryptoKeyTypeToConfig[cryptoKeyType];

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
        label={label + " Key"}
        text={selectedCryptoKey.toString()}
        onChange={onChangeCryptoKey}
        multiline
        color={color}
      />
      <Alert severity={severity}>{t(alertText)}</Alert>
    </Box>
  );
}
