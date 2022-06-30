const TRUSTED_SOURCE_IDX = {
  "Th9jSJAluvhUmRTJCWLO3xdp/G/J3J8/nJxEF2APdUY=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
