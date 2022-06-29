const TRUSTED_SOURCE_IDX = {
  "dRr4jZvDOsWPmfItO+/MCESzT41yVlMKmK2kg38OLwA=": {
    name: "@nuuuwan",
  },
};

export default class TrustedSource {
  static getFromPublicKey(publicKey) {
    return TRUSTED_SOURCE_IDX[publicKey];
  }
}
