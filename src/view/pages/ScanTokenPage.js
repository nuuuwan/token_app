import { Component } from "react";
import { QrReader } from "react-qr-reader";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h4">Scan Token</Typography>
        <QrReader
          onResult={this.onResult.bind(this)}
          style={STYLE_QR_READER}
          containerStyle={STYLE_QR_READER_CONTAINER}
        />
      </Stack>
    );
  }
}

// import ScanToken from "../../view/organisms/ScanToken";
