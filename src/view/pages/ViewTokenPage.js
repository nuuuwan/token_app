import Box from "@mui/material/Box";
import QrCode2Icon from "@mui/icons-material/QrCode2";

import AudioX from "../../nonview/base/AudioX";
import Token from "../../nonview/core/Token";

import TokenView from "../../view/molecules/TokenView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class ViewTokenPage extends AbstractInnerPage {
  get page() {
    return "viewToken";
  }
  get label() {
    return "Token";
  }

  get Icon() {
    return QrCode2Icon;
  }
  get showInOnlyIssuerMode() {
    return false;
  }

  render() {
    AudioX.playLong();
    const token = Token.fromURLContext();

    return (
      <Box>
        <TokenView token={token} />
      </Box>
    );
  }
}
