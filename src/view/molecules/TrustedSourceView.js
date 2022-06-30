import Alert from "@mui/material/Alert";

import TrustedSource from "../../nonview/core/TrustedSource";
import { t } from "../../nonview/base/I18N";

export default function TrustedSourceView({ publicKey }) {
  if (!publicKey) {
    return null;
  }
  const trustedSource = TrustedSource.getFromPublicKey(publicKey);

  let severity, message;
  if (trustedSource) {
    severity = "success";
    message = (
      <>
        Trusted Source
        <strong>{" " + trustedSource.name}</strong>
      </>
    );
  } else {
    severity = "warning";
    message = "Untrusted Source";
  }

  return <Alert severity={severity}>{t(message)}</Alert>;
}
