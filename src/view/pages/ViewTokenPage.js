import { Component } from "react";

import Box from "@mui/material/Box";

import Crypto from "../../nonview/base/Crypto";
import URLContext from "../../nonview/base/URLContext";
import LocalTokenStore from "../../nonview/core/LocalTokenStore"

import TokenView from "../../view/molecules/TokenView";

export default class ViewTokenPage extends Component {
  render() {
    const context = URLContext.getContext();
    const { token } = context;
    const { publicKey, payload } = Crypto.decryptToken(token);
    const url = URLContext.getURL();
    LocalTokenStore.addTokenUrl(url);
    return (
      <Box>
        <TokenView payload={payload} publicKey={publicKey} url={url} />
      </Box>
    );
  }
}
