import { Component } from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LocalTokenStore from "../../nonview/core/LocalTokenStore";

import TokenView from "../../view/molecules/TokenView";

export default class TokenListPage extends Component {
  renderTokenList() {
    const tokenInfoList = LocalTokenStore.getTokenInfoList();

    if (!tokenInfoList || tokenInfoList.length === 0) {
      return (
        <Alert severity="warning">
          You have no tokens stored on this device.
        </Alert>
      );
    }

    return tokenInfoList.map(function (tokenInfo, iToken) {
      return <TokenView key={"token-" + iToken} tokenInfo={tokenInfo} short />;
    });
  }
  render() {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        <Typography variant="h4">My Tokens</Typography>
        {this.renderTokenList()}
      </Stack>
    );
  }
}

// import TokenListPage from "../../view/organisms/TokenListPage";
