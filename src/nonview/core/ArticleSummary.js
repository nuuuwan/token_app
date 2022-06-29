import { JSONWWW } from "../../nonview/base/WWW";
import { URL_DATA } from "../../nonview/constants/Data";

const URL_RAW_ARTICLES = URL_DATA + "/articles.summary.latest.json";
const FILE_NAME_PREFIX = "/tmp/news_lk2/articles/";

export default class ArticleSummary {
  constructor(fileName) {
    this.fileName = fileName;
  }

  static fromDict(d) {
    return new ArticleSummary(d["file_name"].replace(FILE_NAME_PREFIX, ""));
  }

  static async loadArticleSummaryList() {
    const jsonWWW = new JSONWWW(URL_RAW_ARTICLES);
    const rawArticleSummaryList = await jsonWWW.readNoCache();
    return rawArticleSummaryList.map(function (d) {
      return ArticleSummary.fromDict(d);
    });
  }
}
