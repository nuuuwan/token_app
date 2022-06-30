import { Component } from "react";
import { QrReader } from "react-qr-reader";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

const STYLE_QR_READER = {
  width: "100%",
};

const STYLE_QR_READER_CONTAINER = {
  border: "solid",
  backgroundColor: "#eee",
};

export default class ScanToken extends Component {
  onResult(result, error) {
    if (result && result.text) {
      const url = result.text;
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
        <QrReader
          onResult={this.onResult.bind(this)}
          style={STYLE_QR_READER}
          containerStyle={STYLE_QR_READER_CONTAINER}
        />
        <Alert severity="info">
          {t(
            "Scan the QR Code. You could also scan the code with any QR Code app."
          )}
        </Alert>
      </Stack>
    );
  }
}

// import ScanToken from "../../view/organisms/ScanToken";
