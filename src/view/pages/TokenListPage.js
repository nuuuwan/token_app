import { Component } from "react";

import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LocalTokenStore from "../../nonview/core/LocalTokenStore";

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
      const onClick = function () {
        window.history.pushState("", "", tokenInfo.url);
        window.location.reload(true);
      };
      return (
        <Paper key={"token-" + iToken} sx={{ m: 1, p: 1 }}>
          <Typography onClick={onClick}>{JSON.stringify(tokenInfo)}</Typography>
        </Paper>
      );
    });
  }
  render() {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 3 }}>
        <Typography variant="h4">My Tokens</Typography>
        {this.renderTokenList()}
      </Stack>
    );
  }
}

// import TokenListPage from "../../view/organisms/TokenListPage";
