const TRUSTED_SOURCE_IDX = {
  "ZgiKXjYwQjLUKXHzmt4pVGrWoGzJOyavTPf9w1/NyAs=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
