import { JSONWWW } from "../../nonview/base/WWW";
import { URL_DATA } from "../../nonview/constants/Data";

const URL_ENT_TO_GROUP = URL_DATA + "/ent_to_group.json";
const URL_GROUP_TO_ARTICLES = URL_DATA + "/group_to_articles.json";

export const ENT_ALL = "all";

export default class Ent {
  static async loadEntToGroup() {
    const jsonWWW = new JSONWWW(URL_ENT_TO_GROUP);
    return await jsonWWW.read();
  }

  static async loadGroupToArticles() {
    const jsonWWW = new JSONWWW(URL_GROUP_TO_ARTICLES);
    return await jsonWWW.read();
  }
}
