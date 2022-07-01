import FactCheckIcon from "@mui/icons-material/FactCheck";

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
    return "TODO";
  }
}
