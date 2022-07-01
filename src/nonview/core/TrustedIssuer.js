import IDX from "../../nonview/base/IDX";

export default class TrustedIssuer {
  constructor(name, publicKey) {
    this.name = name;
    this.publicKey = publicKey;
  }
}

export const TRUSTED_ISSUER_LIST = [
  new TrustedIssuer("@nuuuwan", "XgeUff5SFvkaZlri3b9aLUrz0ZyM7hCWAmPtaGdh1VA="),
  new TrustedIssuer(
    "Ceylon Petroleum Corporation",
    "TMSHpoRJkgA/cFe9VhbOkkh4FUca3gzPk0JCttolmjU="
  ),
  new TrustedIssuer(
    "Lanka IOC",
    "OhpyKQzbsHTm2+R6vk6nMCPvF0plco+ylKtDvbSLbys="
  ),
];

export const TRUSTED_ISSUER_IDX = IDX.build(
  TRUSTED_ISSUER_LIST,
  (x) => x.publicKey,
  (x) => x
);
