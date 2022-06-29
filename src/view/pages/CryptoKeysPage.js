import { Component } from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import KeyIcon from "@mui/icons-material/Key";

import Crypto from "../../nonview/base/Crypto";

import AlignCenter from "../../view/atoms/AlignCenter";
import CryptoKeyView from "../../view/molecules/CryptoKeyView";
import CryptoKeysPageBottomNavigation from "../../view/molecules/CryptoKeysPageBottomNavigation";

const PUBLIC_MESSAGE = [
  "This is your Public Key (green).",
  "Other people will use this key to verify tokens issued by you.",
  "Please share this key in a public place.",
].join(" ");

const PRIVATE_MESSAGE = [
  "This is your Secret Key (red).",
  "You will use this key to generate tokens.",
  "Please do not share this key with anyone.",
  "Copy this key and save it in a safe place.",
].join(" ");

export default class CryptoKeysPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicKey: null,
      secretKey: null,
    };
  }

  onClickGenerate() {
    const { publicKey, secretKey } = Crypto.getKeyPair();
    this.setState({ publicKey, secretKey });
  }

  renderInnerNoKeys() {
    return (
      <Alert severity="info">
        <AlignCenter>
          <Typography>Click</Typography>
          <KeyIcon />
          <Typography>to generate crypto keys.</Typography>
        </AlignCenter>
      </Alert>
    );
  }

  renderInnerKeys() {
    const { publicKey, secretKey } = this.state;
    return (
      <>
        <CryptoKeyView
          label="Public Key"
          cryptoKey={publicKey}
          color="green"
          message={PUBLIC_MESSAGE}
        />
        <CryptoKeyView
          label="Secret Key"
          cryptoKey={secretKey}
          color="red"
          message={PRIVATE_MESSAGE}
        />
      </>
    );
  }

  render() {
    const { publicKey } = this.state;
    return (
      <Stack spacing={2}>
        <CryptoKeysPageBottomNavigation
          onClickGenerate={this.onClickGenerate.bind(this)}
        />

        {publicKey ? this.renderInnerKeys() : this.renderInnerNoKeys()}
      </Stack>
    );
  }
}
