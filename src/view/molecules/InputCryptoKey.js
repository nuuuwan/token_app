import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

import LabelledTextInput from "../../view/molecules/LabelledTextInput";

const cryptoKeyTypeToConfig = {
  [CRYPTO_KEY_TYPE.PUBLIC]: {
    color: "darkgreen",
    label: "Public",
  },
  [CRYPTO_KEY_TYPE.SECRET]: {
    color: "maroon",
    label: "Secret",
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

  const { color, label } = cryptoKeyTypeToConfig[cryptoKeyType];

  let alertText = undefined;
  if (selectedCryptoKey && !Validate.cryptoKey(selectedCryptoKey)) {
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
      {alertText ? <Alert severity="error">{t(alertText)}</Alert> : null}
    </Box>
  );
}
