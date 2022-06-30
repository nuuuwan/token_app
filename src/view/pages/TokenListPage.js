import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import LocalTokenStore from "../../nonview/core/LocalTokenStore";

import TokenView from "../../view/molecules/TokenView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

import ViewListIcon from "@mui/icons-material/ViewList";
import PageLink from "../../view/molecules/PageLink";

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
  get showInOnlyAdminMode() {
    return false;
  }

  renderTokenList() {
    const tokenInfoList = LocalTokenStore.getTokenInfoList();

    if (!tokenInfoList || tokenInfoList.length === 0) {
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

    return tokenInfoList.map(function (tokenInfo, iToken) {
      return <TokenView key={"token-" + iToken} tokenInfo={tokenInfo} short />;
    });
  }
  render() {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        {this.renderTokenList()}
      </Stack>
    );
  }
}

// import TokenListPage from "../../view/organisms/TokenListPage";
