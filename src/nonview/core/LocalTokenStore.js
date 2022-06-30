const LOCAL_STORAGE_KEY_TOKEN_URL_LIST = "token-app-token-url-list";

export default class LocalTokenStore {
  static getTokenUrlList() {
    const dataJSON = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_URL_LIST);
    if (!dataJSON) {
      return [];
    }
    return JSON.parse(dataJSON);
  }

  static addTokenUrl(url) {
    let urlList = LocalTokenStore.getTokenUrlList();
    urlList.push(url);
    urlList = [...new Set(urlList)];
    LocalTokenStore.setTokenUrlList(urlList);
  }

  static setTokenUrlList(urlList) {
    const dataJSON = JSON.stringify(urlList);
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN_URL_LIST, dataJSON);
  }
}
