import { Component } from "react";

import Box from "@mui/material/Box";

import I18N, { BASE_LANG } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import CreateTokenPage from "../../view/pages/CreateTokenPage";
import CryptoKeysPage from "../../view/pages/CryptoKeysPage";
import TokenListPage from "../../view/pages/TokenListPage";
import ViewTokenPage from "../../view/pages/ViewTokenPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    this.state = {
      context,
    };
    this.isComponentMounted = false;
    this.setContext(context);
  }

  getContext() {
    let context = URLContext.getContext();
    if (!context.page) {
      context.page = "cryptoKeys";
    }
    if (!context.appMode) {
      context.appMode = "receiver";
    }
    if (!context.lang) {
      context.lang = BASE_LANG;
    }
    if (!context.token) {
      context.token = "";
    }

    return context;
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  setContext(newContext) {
    const oldContext = this.getContext();
    const context = { ...oldContext, ...newContext };

    if (context.page !== "viewToken") {
      context.token = "";
    }

    URLContext.setContext(context);
    I18N.setLang(context.lang);

    if (this.isComponentMounted) {
      this.setState({ context });
    }
  }

  onClickOpenPage(page) {
    let context = URLContext.getContext();
    context.page = page;
    this.setContext(context);
  }

  renderInnerPage() {
    const { context } = this.state;
    switch (context.page) {
      case "cryptoKeys":
        return <CryptoKeysPage />;
      case "createToken":
        return <CreateTokenPage />;
      case "viewToken":
        return <ViewTokenPage />;
      case "tokenList":
        return <TokenListPage />;
      default:
        return <CryptoKeysPage />;
    }
  }

  render() {
    const { context } = this.state;
    const key = JSON.stringify(context);
    return (
      <Box key={key}>
        <CustomAppBar />
        {this.renderInnerPage()}
        <HomePageBottomNavigation
          onClickOpenPage={this.onClickOpenPage.bind(this)}
        />
      </Box>
    );
  }
}
