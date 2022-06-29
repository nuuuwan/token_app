import { Component } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import I18N, { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";
import ArticleSummary from "../../nonview/core/ArticleSummary";
import Ent, { ENT_ALL } from "../../nonview/core/Ent";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import ArticleView from "../../view/organisms/ArticleView";

const STYLE = {
  width: 400,
  maxWidth: "90%",
  margin: "auto",
  marginTop: 5,
  marginBottom: 5,
};

const MAX_ARTICLES_TO_DISPLAY = 48;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    this.state = {
      context,
      articleSummaryList: null,
      entToGroup: null,
      groupToArticles: null,
    };
    this.isComponentMounted = false;
    this.setContext(context);
  }

  getContext() {
    let context = URLContext.getContext();
    if (!context.lang) {
      context.lang = I18N.getLang();
    }
    if (!context.ent) {
      context.ent = ENT_ALL;
    }
    return context;
  }

  setContext(newContext) {
    const oldContext = this.getContext();
    const context = { ...oldContext, ...newContext };
    URLContext.setContext(context);
    I18N.setLang(context.lang);

    if (this.isComponentMounted) {
      this.setState({ context });
    }
  }

  async refreshData() {
    const { context } = this.state;
    const { ent } = context;

    let articleSummaryList;
    if (ent === ENT_ALL) {
      articleSummaryList = await ArticleSummary.loadArticleSummaryList();
    } else {
      const entToGroup = await Ent.loadEntToGroup();
      const group = entToGroup[ent];
      const groupToArticles = await Ent.loadGroupToArticles();
      const fileNameList = groupToArticles[group];

      articleSummaryList = fileNameList.map(function (fileName) {
        return ArticleSummary.fromDict({ file_name: fileName });
      });
    }

    this.setState({
      articleSummaryList,
    });
  }

  async componentDidMount() {
    this.isComponentMounted = true;
    await this.refreshData();
  }

  async onSelectLanguage(lang) {
    this.setContext({ lang });
  }

  render() {
    const { articleSummaryList, context } = this.state;
    if (!articleSummaryList || articleSummaryList.length === 0) {
      return <CircularProgress />;
    }
    const { ent } = context;
    let entText;
    if (ent === ENT_ALL) {
      entText = null;
    } else {
      entText = (
        <Typography variant="body1" sx={{ m: 0, p: 0 }}>
          {t('Articles mentioning "000"', ent)}
        </Typography>
      );
    }

    const articleSummaryListToDisplay = articleSummaryList.slice(
      0,
      MAX_ARTICLES_TO_DISPLAY
    );
    return (
      <Box sx={STYLE}>
        <CustomAppBar />
        <Stack spacing={2}>
          {entText}
          {articleSummaryListToDisplay.map(function (articleSummary) {
            const fileName = articleSummary.fileName;
            return (
              <ArticleView
                key={"article-" + fileName}
                articleSummary={articleSummary}
              />
            );
          })}
        </Stack>
        <HomePageBottomNavigation
          onSelectLanguage={this.onSelectLanguage.bind(this)}
        />
      </Box>
    );
  }
}
