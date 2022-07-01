import Card from "@mui/material/Card";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { TRUSTED_ISSUER_LIST } from "../../nonview/core/TrustedIssuer";

import TrustedIssuerView from "../../view/molecules/TrustedIssuerView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class TrustedIssuersPage extends AbstractInnerPage {
  get page() {
    return "trustedIssuers";
  }
  get label() {
    return "Trusted Issuers";
  }

  get Icon() {
    return FactCheckIcon;
  }
  get showInOnlyIssuerMode() {
    return false;
  }

  render() {
    return TRUSTED_ISSUER_LIST.map(function (trustedIssuer, iTrustedIssuer) {
      return (
        <Card
          key={"trustedIssuer-" + iTrustedIssuer}
          sx={{ m: 0, p: 1, marginBottom: 5, cursor: "pointer" }}
        >
          <TrustedIssuerView trustedIssuer={trustedIssuer} />
        </Card>
      );
    });
  }
}
