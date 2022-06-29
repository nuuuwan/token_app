const TRUSTED_SOURCE_IDX = {
  "afQypKdTmCJzGW52oqBzalDisCk1Id6KTuEPw9X/YWA=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
