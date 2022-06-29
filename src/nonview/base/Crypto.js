const nacl = require("tweetnacl");

const LOCAL_STORAGE_KEY = "token-app-key-pair";

export const CRYPTO_KEY_TYPE = {
  PUBLIC: "public",
  SECRET: "secret",
};

export default class Crypto {
  static getKeyPairFromLocalStorage() {
    const dataJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (dataJSON) {
      return JSON.parse(dataJSON);
    }
    return null;
  }

  static setKeyPairToLocalStorage(keyPair) {
    const dataJSON = JSON.stringify(keyPair);
    localStorage.setItem(LOCAL_STORAGE_KEY, dataJSON);
  }

  static getKeyPair() {
    const raw = nacl.box.keyPair();
    return {
      publicKey: Crypto.serializeKey(raw.publicKey),
      secretKey: Crypto.serializeKey(raw.secretKey),
    };
  }

  static serializeKey(uInt8ArrayKey) {
    const s = window.btoa(JSON.stringify(uInt8ArrayKey));
    return s;
  }

  static deserializeKey(s) {
    const uInt8ArrayKey = JSON.parse(window.atob(s));
    return uInt8ArrayKey;
  }

  static createToken(payload) {
    return {
      payload,
      publicKey: "XXX",
      payloadHash: "XXX",
    };
  }
}
