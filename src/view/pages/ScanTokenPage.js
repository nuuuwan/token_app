import { Component } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { QrReader } from 'react-qr-reader';
import URLContext from "../../nonview/base/URLContext"

export default class ScanToken extends Component {

  onResult(result, error) {
    if (error) {
      console.error(error);
    }
    else if (result) {
      const url = result.text;
      const context = URLContext.urlToContext(url);

      if (context.token && context.page === 'viewToken') {
        window.history.pushState("", "", url);
        window.location.reload(true);
      }
    }
  }

  render() {

    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        <Typography variant="h4">Scan Token</Typography>
        <QrReader
          onResult={this.onResult.bind(this)}
          style={{ width: '100%' }}
        />
      </Stack>
    );
  }
}

// import ScanToken from "../../view/organisms/ScanToken";
