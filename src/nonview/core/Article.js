import Cache from "../../nonview/base/Cache";
import TimeX from "../../nonview/base/TimeX";
import { JSONWWW } from "../../nonview/base/WWW";
import { URL_DATA } from "../../nonview/constants/Data";

const URL_ARTICLES = URL_DATA + "/articles";
const MAX_WORDS_BODY_LINES_LIMITED = 100;
const READING_SPEED_WPM = 200;

export default class Article {
  constructor(newspaperID, url, timeUT, originalLang, originalTitle, textIDX) {
    this.newspaperID = newspaperID;
    this.url = url;
    this.timeUT = timeUT;
    this.originalLang = originalLang;
    this.originalTitle = originalTitle;
    this.textIDX = textIDX;
  }

  static fromDict(d) {
    let text_idx;
    if (d["text_idx"]) {
      text_idx = Object.entries(d["text_idx"]).reduce(function (
        text_idx,
        [lang, values]
      ) {
        text_idx[lang] = {
          title: values["title"],
          bodyLines: values["body_lines"],
          titleEnts: values["title_ents"],
          bodyLineEntsList: values["body_line_ents_list"],
        };
        return text_idx;
      },
      {});
    }
    return new Article(
      d["newspaper_id"],
      d["url"],
      parseInt(d["time_ut"]),

      d["original_lang"],
      d["origina_title"],
      text_idx
    );
  }

  get timeStrHumanized() {
    return TimeX.getHumanTime(this.timeUT);
  }

  get timeStr() {
    return TimeX.formatTime(this.timeUT);
  }

  get urlShort() {
    return this.url
      .split("/")
      .splice(0, 3)
      .join("/")
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "");
  }

  get bodyLinesLimited() {
    let nWordsTotal = 0;
    let bodyLinesLimited = [];
    for (let line of this.bodyLines) {
      const nWords = line.split(" ").length;
      bodyLinesLimited.push(line);
      nWordsTotal += nWords;
      if (nWordsTotal > MAX_WORDS_BODY_LINES_LIMITED) {
        bodyLinesLimited.push("...");
        break;
      }
    }
    return bodyLinesLimited;
  }

  get body() {
    return this.bodyLines.join("\n");
  }

  get words() {
    return this.body.split(" ");
  }

  get wordCount() {
    return this.words.length;
  }

  get readingTimeMinutes() {
    return Math.ceil(this.wordCount / READING_SPEED_WPM);
  }

  static isCompatible(d) {
    if (!d["original_lang"]) {
      return false;
    }
    if (!d["text_idx"]) {
      return false;
    }
    return true;
  }

  static async loadRawArticle(fileName) {
    const urlArticle = [URL_ARTICLES, fileName].join("/");
    const jsonWWW = new JSONWWW(urlArticle);
    return await jsonWWW.read();
  }

  static async loadArticle(fileName) {
    const cache = new Cache("article:" + fileName);
    const rawArticle = await cache.get(async function () {
      return await Article.loadRawArticle(fileName);
    });

    if (!Article.isCompatible(rawArticle)) {
      return null;
    }

    return Article.fromDict(rawArticle);
  }
}
