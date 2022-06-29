import { Component } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Crypto from "../../nonview/base/Crypto";
import Paper from "@mui/material/Paper";

export default class TokenListPage extends Component {
  render() {
    const tokenUrlList = Crypto.getTokenUrlList();
    return (
      <Stack spacing={1} sx={{ m: 1, p: 3 }}>
        <Typography variant="h4">My Tokens</Typography>
        {tokenUrlList.map(function (tokenUrl, iToken) {
          const onClick = function () {
            window.history.pushState("", "", tokenUrl);
            window.location.reload(true);
          };
          return (
            <Paper key={"token-" + iToken} sx={{ m: 1, p: 1 }}>
              <Typography href={tokenUrl} onClick={onClick}>
                Token + {iToken}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    );
  }
}

// import TokenListPage from "../../view/organisms/TokenListPage";
