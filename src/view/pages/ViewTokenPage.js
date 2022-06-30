import Box from "@mui/material/Box";

import Crypto from "../../nonview/base/Crypto";
import URLContext from "../../nonview/base/URLContext";
import LocalTokenStore from "../../nonview/core/LocalTokenStore";

import TokenView from "../../view/molecules/TokenView";

import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import QrCode2Icon from "@mui/icons-material/QrCode2";

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
  get showInOnlyAdminMode() {
    return false;
  }

  render() {
    const url = URLContext.getURL();
    let tokenInfo = LocalTokenStore.getTokenInfoFromURL(url);

    if (!tokenInfo) {
      console.debug(`${url} not found in LocalTokenStore.`);
      const context = URLContext.getContext();
      const { token } = context;
      const { publicKey, payload } = Crypto.decryptToken(token);

      tokenInfo = { publicKey, payload, url };
      LocalTokenStore.addTokenInfo(tokenInfo);
    }

    return (
      <Box>
        <TokenView tokenInfo={tokenInfo} />
      </Box>
    );
  }
}
