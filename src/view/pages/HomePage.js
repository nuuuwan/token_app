import { Component } from "react";

import Box from "@mui/material/Box";

import AudioX from "../../nonview/base/AudioX";
import I18N, { BASE_LANG } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import PAGE_CONFIG_LIST, {
  DEFAULT_PAGE_CONFIG,
} from "../../view/pages/PAGE_CONFIG_LIST";

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
      context.mode = "receiver";
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
    AudioX.playShort();
    let context = URLContext.getContext();
    context.page = page;
    this.setContext(context);
  }

  getInnerPageConfig() {
    let { context } = this.state;

    for (let config of PAGE_CONFIG_LIST) {
      if (config.page === context.page) {
        if (!config.showInOnlyIssuerMode || context.mode === "issuer") {
          context.page = config.page;
          this.setContext(context);
          return config;
        }
      }
    }

    context.page = DEFAULT_PAGE_CONFIG.page;
    this.setContext(context);
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
