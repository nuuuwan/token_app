import IDX from "../../nonview/base/IDX";

import CreateTokenPage from "../../view/pages/CreateTokenPage";
import CryptoKeysPage from "../../view/pages/CryptoKeysPage";
import ScanTokenPage from "../../view/pages/ScanTokenPage";
import TokenListPage from "../../view/pages/TokenListPage";
import TrustedIssuersPage from "../../view/pages/TrustedIssuersPage";
import ViewTokenPage from "../../view/pages/ViewTokenPage";

const PAGE_LIST = [
  CryptoKeysPage,
  CreateTokenPage,
  TrustedIssuersPage,
  ScanTokenPage,
  TokenListPage,
  ViewTokenPage,
];

const PAGE_CONFIG_LIST = PAGE_LIST.map(function (Page) {
  const pageInstance = new Page();

  return {
    Page,
    page: pageInstance.page,
    label: pageInstance.label,
    Icon: pageInstance.Icon,
    showInOnlyIssuerMode: pageInstance.showInOnlyIssuerMode,
    color: pageInstance.color,
  };
});

export default PAGE_CONFIG_LIST;

export const PAGE_CONFIG_IDX = IDX.build(
  PAGE_CONFIG_LIST,
  (x) => x.page,
  (x) => x
);

export const DEFAULT_PAGE_CONFIG = PAGE_CONFIG_IDX["tokenList"];
