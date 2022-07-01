import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import ViewListIcon from "@mui/icons-material/ViewList";

import Token from "../../nonview/core/Token";

import PageLink from "../../view/molecules/PageLink";
import TokenView from "../../view/molecules/TokenView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class TokenListPage extends AbstractInnerPage {
  get page() {
    return "tokenList";
  }
  get label() {
    return "My Tokens";
  }

  get Icon() {
    return ViewListIcon;
  }
  get showInOnlyIssuerMode() {
    return false;
  }

  renderTokenList() {
    const tokenList = Token.getLocalTokenList();

    if (tokenList.length === 0) {
      return (
        <Alert severity="warning">
          You have no tokens stored on this device.
          <PageLink
            page={"scanToken"}
            onClickOpenPage={this.props.onClickOpenPage}
          />
        </Alert>
      );
    }

    return tokenList.map(function (token, iToken) {
      return <TokenView key={"token-" + iToken} token={token} short />;
    });
  }
  render() {
    return <Box>{this.renderTokenList()}</Box>;
  }
}

// import TokenListPage from "../../view/organisms/TokenListPage";
