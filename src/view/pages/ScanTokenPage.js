import { QrReader } from "react-qr-reader";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

const STYLE_QR_READER = {
  width: "100%",
};

const STYLE_QR_READER_CONTAINER = {
  border: "solid",
  backgroundColor: "#eee",
};

export default class ScanToken extends AbstractInnerPage {
  get page() {
    return "scanToken";
  }
  get label() {
    return "Scan Token";
  }

  get Icon() {
    return QrCodeScannerIcon;
  }
  get showInOnlyAdminMode() {
    return false;
  }

  constructor(props) {
    super(props);
    this.state = { url: null };
  }

  onResult(result, error) {
    if (result && result.text) {
      const url = result.text;
      this.setState({ url });
      const context = URLContext.urlToContext(url);

      if (context.token && context.page === "viewToken") {
        console.debug("Openning URL: " + url);
        URLContext.open(url);
      }
    }
  }

  render() {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        <Alert severity="info">
          {t(
            "Scan the Token QR Code with your Device Camera. Alternatively, you could also scan the code with any QR Code app."
          )}
        </Alert>
        <QrReader
          onResult={this.onResult.bind(this)}
          style={STYLE_QR_READER}
          containerStyle={STYLE_QR_READER_CONTAINER}
          constraints={{
            facingMode: "environment",
          }}
        />
        {this.state.url ? (
          <Alert severity="success">{t("Successfully scanned QR Code.")}</Alert>
        ) : null}
      </Stack>
    );
  }
}

// import ScanToken from "../../view/organisms/ScanToken";
