import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import FactCheckIcon from '@mui/icons-material/FactCheck';

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
