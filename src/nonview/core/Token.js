import Crypto from "../../nonview/base/Crypto";
import IDX from "../../nonview/base/IDX";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import URLContext from "../../nonview/base/URLContext";
import WWW from "../../nonview/base/WWW";

const CACHE_KEY_TOKEN_IDX = "token-app-token-idx-v20220701-1154";

const DEFAULT_TOKEN_AGE = SECONDS_IN.DAY * 3;

export default class Token {
  constructor(
    vehicleNumber,
    priority,
    timeCreatedUT,
    timeExpiryUT,
    issuerPublicKey,
    tokenEncrypted
  ) {
    this.vehicleNumber = vehicleNumber;
    this.priority = priority;
    this.timeCreatedUT = timeCreatedUT;
    this.timeExpiryUT = timeExpiryUT;
    this.issuerPublicKey = issuerPublicKey;
    this.tokenEncrypted = tokenEncrypted;
  }

  static createNew(vehicleNumber, priority) {
    const currentTimeUT = TimeX.getUnixTime();
    const keyPair = Crypto.getKeyPairFromLocalStorage();

    if (!keyPair || !keyPair.publicKey) {
      throw Error("Invalid keyPair");
    }

    const dPartial = {
      vehicleNumber,
      priority,
      timeCreatedUT: currentTimeUT,
      timeExpiryUT: currentTimeUT + DEFAULT_TOKEN_AGE,
    };
    return Token.fromDictPartial(
      dPartial,
      keyPair.publicKey,
      Crypto.encrypt(dPartial)
    );
  }

  static cmpTimeExpiry(a, b) {
    return b.timeExpiryUT - a.timeExpiryUT;
  }

  static fromDictPartial(d, issuerPublicKey, tokenEncrypted) {
    const token = new Token(
      d["vehicleNumber"],
      d["priority"],
      d["timeCreatedUT"],
      d["timeExpiryUT"],
      issuerPublicKey,
      tokenEncrypted
    );
    return token;
  }

  static fromDict(d) {
    const token = new Token(
      d["vehicleNumber"],
      d["priority"],
      d["timeCreatedUT"],
      d["timeExpiryUT"],
      d["issuerPublicKey"],
      d["tokenEncrypted"]
    );
    return token;
  }

  get dictPartial() {
    return {
      vehicleNumber: this.vehicleNumber,
      priority: this.priority,
      timeCreatedUT: this.timeCreatedUT,
      timeExpiryUT: this.timeExpiryUT,
    };
  }

  get dict() {
    return {
      vehicleNumber: this.vehicleNumber,
      priority: this.priority,
      timeCreatedUT: this.timeCreatedUT,
      timeExpiryUT: this.timeExpiryUT,
      issuerPublicKey: this.issuerPublicKey,
      tokenEncrypted: this.tokenEncrypted,
    };
  }

  static fromEncrypted(tokenEncrypted) {
    const { writerPublicKey, message } = Crypto.decrypt(tokenEncrypted);
    const token = Token.fromDictPartial(
      message,
      writerPublicKey,
      tokenEncrypted
    );
    return token;
  }

  // localStorage
  static getLocalTokenIdx() {
    const dataJSON = localStorage.getItem(CACHE_KEY_TOKEN_IDX);
    if (dataJSON) {
      const tokenIdxRaw = JSON.parse(dataJSON);
      const tokenIdx = IDX.map(
        tokenIdxRaw,
        (k) => k,
        (v) => Token.fromDict(v)
      );
      return tokenIdx;
    }
    return {};
  }

  static setLocalTokenIdx(tokenIdx) {
    const dataJSON = JSON.stringify(
      IDX.map(
        tokenIdx,
        (k) => k,
        (v) => v.dict
      )
    );
    localStorage.setItem(CACHE_KEY_TOKEN_IDX, dataJSON);
  }

  static getLocalTokenList() {
    const tokenIdx = Token.getLocalTokenIdx();
    const tokenList = Object.values(tokenIdx).sort(Token.cmpTimeExpiry);
    return tokenList;
  }

  static addTokenToLocalTokenIdx(token) {
    let tokenIdx = Token.getLocalTokenIdx();
    tokenIdx[token.tokenEncrypted] = token;
    Token.setLocalTokenIdx(tokenIdx);
  }

  // URLs

  get url() {
    return URLContext.contextToURL({
      tokenEncrypted: this.tokenEncrypted,
      page: "viewToken",
    }).replace("http://localhost:3000", "https://nuuuwan.github.io");
  }

  open() {
    WWW.open(this.url);
  }

  static fromURL(url) {
    return Token.fromContextOnly(URLContext.urlToContext(url));
  }

  static fromURLContext(url) {
    return Token.fromContextOnly(URLContext.getContext());
  }

  static fromContextOnly(context) {
    const { tokenEncrypted } = context;
    if (!tokenEncrypted) {
      throw Error("tokenEncrypted missing in context");
    }

    const tokenIdx = Token.getLocalTokenIdx();
    if (tokenIdx[tokenEncrypted]) {
      return tokenIdx[tokenEncrypted];
    }

    return Token.fromEncrypted(tokenEncrypted);
  }
}
