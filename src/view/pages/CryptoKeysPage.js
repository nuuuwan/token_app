import { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyIcon from "@mui/icons-material/Key";

import Crypto, { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";

import CryptoKeyView from "../../view/molecules/CryptoKeyView";

export default class CryptoKeysPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPair: null,
    };
  }

  onClickGenerate() {
    const keyPair = Crypto.getKeyPair();
    this.setState({ keyPair });
  }

  render() {
    const { keyPair } = this.state;
    return (
      <Stack spacing={2}>
        {keyPair ? (
          <>
            <CryptoKeyView
              cryptoKeyType={CRYPTO_KEY_TYPE.PUBLIC}
              cryptoKey={keyPair.publicKey}
            />
            <CryptoKeyView
              cryptoKeyType={CRYPTO_KEY_TYPE.SECRET}
              cryptoKey={keyPair.secretKey}
            />
          </>
        ) : null}
        <Button
          onClick={this.onClickGenerate.bind(this)}
          variant="contained"
          startIcon={<KeyIcon />}
        >
          Generate Crypto Keys
        </Button>
      </Stack>
    );
  }
}
