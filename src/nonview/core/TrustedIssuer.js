import IDX from "../../nonview/base/IDX"
export default class TrustedIssuer {
  constructor(name, publicKey) {
    this.name = name;
    this.publicKey = publicKey;
  }
}

export const TRUSTED_ISSUER_LIST = [
  new TrustedIssuer(
    "@nuuuwan",
    "XgeUff5SFvkaZlri3b9aLUrz0ZyM7hCWAmPtaGdh1VA=",
  )
]

export const TRUSTED_ISSUER_IDX = IDX.build(
  TRUSTED_ISSUER_LIST,
  x => x.publicKey,
  x => x,
)
