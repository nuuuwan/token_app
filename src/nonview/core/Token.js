import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import Crypto from "../../nonview/base/Crypto";
import WWW from "../../nonview/base/WWW";
import URLContext from "../../nonview/base/URLContext";
import IDX from "../../nonview/base/IDX";

const CACHE_KEY_TOKEN_IDX = "token-app-token-idx";

const DEFAULT_TOKEN_AGE = SECONDS_IN.DAY * 3;

export default class Token {
  constructor(
    vehicleNumber,
    priority,
    timeCreatedUT,
    timeExpiryUT,
    issuerPublicKey
  ) {
    this.vehicleNumber = vehicleNumber;
    this.priority = priority;
    this.timeCreatedUT = timeCreatedUT;
    this.timeExpiryUT = timeExpiryUT;
    this.issuerPublicKey = issuerPublicKey;
  }

  static createNew(vehicleNumber, priority) {
    const currentTimeUT = TimeX.getUnixTime();
    const keyPair = Crypto.getKeyPairFromLocalStorage();

    if (!keyPair || !keyPair.publicKey) {
      throw Error("Invalid keyPair");
    }
    const issuerPublicKey = keyPair.publicKey;
    return new Token(
      vehicleNumber,
      priority,
      currentTimeUT,
      currentTimeUT + DEFAULT_TOKEN_AGE,
      issuerPublicKey
    );
  }

  static cmpTimeExpiry(a, b) {
    return b.timeExpiryUT - a.timeExpiryUT;
  }

  static fromDict(d) {
    const token = new Token(
      d["vehicleNumber"],
      d["priority"],
      d["timeCreatedUT"],
      d["timeExpiryUT"],
      d["issuerPublicKey"]
    );
    return token;
  }

  get dict() {
    return {
      vehicleNumber: this.vehicleNumber,
      priority: this.priority,
      timeCreatedUT: this.timeCreatedUT,
      timeExpiryUT: this.timeExpiryUT,
      issuerPublicKey: this.issuerPublicKey,
    };
  }

  // Crypto

  get encrypted() {
    return Crypto.encrypt(this.dict);
  }

  static fromEncrypted(tokenEncrypted) {
    const { writerPublicKey, message } = Crypto.decrypt(tokenEncrypted);
    const token = Token.fromDict(message);
    if (token.issuerPublicKey.localeCompare(writerPublicKey) !== 0) {
      throw Error("Invalid token! issuerPublicKey !== writerPublicKey");
    }
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
    tokenIdx[token.encrypted] = token;
    Token.setLocalTokenIdx(tokenIdx);
  }

  // URLs

  get url() {
    const context = {
      tokenEncrypted: this.encrypted,
      page: "viewToken",
    };
    return URLContext.contextToURL(context);
  }

  open() {
    WWW.open(this.url);
  }

  static fromURLContext() {
    const context = URLContext.getContext();
    const { tokenEncrypted } = context;

    const tokenIdx = Token.getLocalTokenIdx();
    if (tokenIdx[tokenEncrypted]) {
      return tokenIdx[tokenEncrypted];
    }

    return Token.fromEncrypted(tokenEncrypted);
  }
}
