import { Component } from "react";

import Box from "@mui/material/Box";

import I18N, { BASE_LANG } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import PAGE_CONFIG_LIST from "../../view/pages/PAGE_CONFIG_LIST";

const DEFAULT_PAGE_CONFIG = PAGE_CONFIG_LIST[4];

const STYLE_INNER_PAGE_BOX = {
  marginTop: 10,
};

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
      context.page = "tokenList";
    }
    if (!context.mode) {
      context.mode = "issuer";
    }
    if (!context.lang) {
      context.lang = BASE_LANG;
    }
    if (!context.tokenEncrypted) {
      context.tokenEncrypted = "";
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
      context.tokenEncrypted = "";
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

  getInnerPageConfig() {
    const { context } = this.state;

    for (let config of PAGE_CONFIG_LIST) {
      if (config.page === context.page) {
        return config;
      }
    }

    return DEFAULT_PAGE_CONFIG;
  }

  render() {
    const { context } = this.state;
    const key = JSON.stringify(context);
    const innerPageConfig = this.getInnerPageConfig();

    return (
      <Box key={key}>
        <CustomAppBar
          title={innerPageConfig.label}
          Icon={innerPageConfig.Icon}
        />
        <Box sx={STYLE_INNER_PAGE_BOX}>
          <innerPageConfig.Page
            onClickOpenPage={this.onClickOpenPage.bind(this)}
          />
        </Box>
        <HomePageBottomNavigation
          onClickOpenPage={this.onClickOpenPage.bind(this)}
        />
      </Box>
    );
  }
}
