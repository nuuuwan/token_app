const TRUSTED_SOURCE_IDX = {
  "SHD+DubsWPEXf0qDjJPBhK7PbDFvhyOvrvRFXydYVxs=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
