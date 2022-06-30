import { Component } from "react";

import Box from "@mui/material/Box";

import Crypto from "../../nonview/base/Crypto";
import URLContext from "../../nonview/base/URLContext";
import LocalTokenStore from "../../nonview/core/LocalTokenStore";

import TokenView from "../../view/molecules/TokenView";

export default class ViewTokenPage extends Component {
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
