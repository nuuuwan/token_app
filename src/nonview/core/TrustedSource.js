const TRUSTED_SOURCE_IDX = {
  "EYnHY8C8ymPZnEe7/sFEEuaTCj5erVCFdf85F8dQJkU=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
