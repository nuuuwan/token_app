import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import KeyIcon from "@mui/icons-material/Key";
import SaveIcon from "@mui/icons-material/Save";

import Crypto, { CRYPTO_KEY_TYPE } from "../../nonview/base/Crypto";
import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

import AppColors from "../../view/_constants/AppColors";
import AlignRight from "../../view/atoms/AlignRight";
import InputCryptoKey from "../../view/molecules/InputCryptoKey";
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
        <InputCryptoKey
          cryptoKeyType={CRYPTO_KEY_TYPE.PUBLIC}
          selectedCryptoKey={keyPair.publicKey}
          onChangeCryptoKey={this.onChangePublicKey.bind(this)}
        >
          <Tooltip title="Generate New Crypto Keys">
            <IconButton onClick={this.onClickGenerate.bind(this)}>
              <AutorenewIcon
                sx={{ fontSize: "100%", color: AppColors.Issuer }}
              />
            </IconButton>
          </Tooltip>
        </InputCryptoKey>

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
