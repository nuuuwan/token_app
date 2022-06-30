import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import KeyIcon from "@mui/icons-material/Key";
import SaveIcon from "@mui/icons-material/Save";

import Crypto, { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

import AlignRight from "../../view/atoms/AlignRight";
import InputCryptoKey from "../../view/molecules/InputCryptoKey";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class CryptoKeysPage extends AbstractInnerPage {
  constructor(props) {
    super(props);
    this.state = {
      keyPair: Crypto.getKeyPairFromLocalStorage(),
    };
  }

  get page() {
    return "cryptoKeys";
  }
  get label() {
    return "Crypto Keys";
  }
  get Icon() {
    return KeyIcon;
  }

  onClickGenerate() {
    const keyPair = Crypto.getKeyPair();
    this.setState({ keyPair });
  }

  onChangeSecretKey(secretKey) {
    let keyPair = this.state;
    if (!keyPair) {
      keyPair = {};
    }
    keyPair.secretKey = secretKey;
    this.setState({ keyPair });
  }

  onChangePublicKey(publicKey) {
    let keyPair = this.state;
    if (!keyPair) {
      keyPair = {};
    }
    keyPair.publicKey = publicKey;
    this.setState({ keyPair });
  }

  onClickSave() {
    let { keyPair } = this.state;
    Crypto.setKeyPairToLocalStorage(keyPair);
    window.location.reload(true);
  }

  render() {
    let { keyPair } = this.state;
    if (!keyPair) {
      keyPair = { publicKey: "", secretKey: "" };
    }

    const browserKeyPair = Crypto.getKeyPairFromLocalStorage();
    const areKeyPairsValid =
      Validate.cryptoKey(keyPair.publicKey) &&
      Validate.cryptoKey(keyPair.secretKey);

    const isBrowserKeyPair =
      areKeyPairsValid &&
      JSON.stringify(browserKeyPair).localeCompare(JSON.stringify(keyPair)) ===
        0;

    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        {isBrowserKeyPair ? (
          <Alert severity="info">
            {t("These Keys are saved on your Browser")}
          </Alert>
        ) : (
          <Alert severity="warning">
            {t("You have no CryptoKeys stored on your Browser.")}
          </Alert>
        )}

        <AlignRight>
          <Button
            onClick={this.onClickGenerate.bind(this)}
            variant="contained"
            startIcon={<AutorenewIcon />}
            sx={{ backgroundColor: this.color }}
          >
            {t("Generate New Crypto Keys")}
          </Button>
        </AlignRight>

        <InputCryptoKey
          cryptoKeyType={CRYPTO_KEY_TYPE.PUBLIC}
          selectedCryptoKey={keyPair.publicKey}
          onChangeCryptoKey={this.onChangePublicKey.bind(this)}
        />
        <TrustedSourceView publicKey={keyPair.publicKey} />
        <InputCryptoKey
          cryptoKeyType={CRYPTO_KEY_TYPE.SECRET}
          selectedCryptoKey={keyPair.secretKey}
          onChangeCryptoKey={this.onChangeSecretKey.bind(this)}
        />

        <AlignRight>
          <Button
            onClick={this.onClickSave.bind(this)}
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={!areKeyPairsValid || isBrowserKeyPair}
            sx={{ backgroundColor: this.color }}
          >
            {t("Save to Browser")}
          </Button>
        </AlignRight>
      </Stack>
    );
  }
}
