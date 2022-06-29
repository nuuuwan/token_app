import { Component } from "react";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SaveIcon from "@mui/icons-material/Save";

import Crypto, { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import Validate from "../../nonview/core/Validate";

import Condition from "../../view/atoms/Condition";
import InputCryptoKey from "../../view/molecules/InputCryptoKey";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";

export default class CryptoKeysPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPair: Crypto.getKeyPairFromLocalStorage(),
    };
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
    const isBrowserKeyPair =
      JSON.stringify(browserKeyPair).localeCompare(JSON.stringify(keyPair)) ===
      0;

    const areKeyPairsValid =
      Validate.cryptoKey(keyPair.publicKey) &&
      Validate.cryptoKey(keyPair.secretKey);
    return (
      <Stack spacing={1} sx={{ m: 1, p: 3 }}>
        <Typography variant="h4">Crypto Keys</Typography>
        <Condition condition={isBrowserKeyPair}>
          <Alert severity="info">These Keys are saved on your Browser</Alert>
        </Condition>

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

        <Button
          onClick={this.onClickGenerate.bind(this)}
          variant="contained"
          startIcon={<AutorenewIcon />}
        >
          Generate New Crypto Keys
        </Button>

        <Button
          onClick={this.onClickSave.bind(this)}
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={!areKeyPairsValid || isBrowserKeyPair}
        >
          Save to Browser
        </Button>

        <Alert severity="info">
          You can either generate new crypto keys, or input previously generated
          and saved crypto keys.
        </Alert>
      </Stack>
    );
  }
}
