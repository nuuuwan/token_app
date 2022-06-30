import IDX from "../../nonview/base/IDX";

const LOCAL_STORAGE_KEY_TOKEN_INFO_LIST = "token-app-token-info-list";

export default class LocalTokenStore {
  static dedupeAndSort(tokenInfoList) {
    return Object.values(
      IDX.build(
        tokenInfoList,
        (x) => x.url,
        (x) => x
      )
    ).sort(function (a, b) {
      return b.payload.timeExpiryUT - a.payload.timeExpiryUT;
    });
  }

  static getTokenInfoList() {
    const dataJSON = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_INFO_LIST);
    if (!dataJSON) {
      return [];
    }
    const tokenInfoList = JSON.parse(dataJSON);
    return LocalTokenStore.dedupeAndSort(tokenInfoList);
  }

  static addTokenInfo(tokenInfo) {
    let tokenInfoList = LocalTokenStore.getTokenInfoList();
    tokenInfoList.push(tokenInfo);
    LocalTokenStore.setTokenInfoList(tokenInfoList);
  }

  static setTokenInfoList(tokenInfoList) {
    tokenInfoList = LocalTokenStore.dedupeAndSort(tokenInfoList);
    const dataJSON = JSON.stringify(tokenInfoList);
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN_INFO_LIST, dataJSON);
  }

  static getTokenInfoIdx() {
    return IDX.build(
      LocalTokenStore.getTokenInfoList(),
      (x) => x.url,
      (x) => x
    );
  }

  static getTokenInfoFromURL(url) {
    const tokenInfoIdx = LocalTokenStore.getTokenInfoIdx();
    return tokenInfoIdx[url];
  }
}
