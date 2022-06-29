const nacl = require("tweetnacl");

export default class Crypto {
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
}
