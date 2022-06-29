const TRUSTED_SOURCE_IDX = {
  "wkDWzZTXxBVC+pvnvgliubS7PC2ppr4Vogt2B8QQGAs=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
