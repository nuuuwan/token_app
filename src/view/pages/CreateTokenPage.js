import { Component } from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Crypto from "../../nonview/base/Crypto";
import { t } from "../../nonview/base/I18N";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import URLContext from "../../nonview/base/URLContext";
import Validate from "../../nonview/core/Validate";

import InputPriority from "../../view/molecules/InputPriority";
import InputVehicleNumber from "../../view/molecules/InputVehicleNumber";

export default class CreateTokenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNumber: "",
      priority: "",
    };
  }

  onClickCreateToken() {
    const { vehicleNumber, priority } = this.state;
    const currentTimeUT = TimeX.getUnixTime();
    const token = Crypto.encryptToken({
      vehicleNumber,
      priority,
      timeCreatedUT: currentTimeUT,
      timeExpiryUT: currentTimeUT + SECONDS_IN.DAY,
    });

    let context = URLContext.getContext();
    context.token = token;
    context.page = "viewToken";
    URLContext.setContext(context);
    window.location.reload(true);
  }

  onChangeVehicleNumber(vehicleNumber) {
    this.setState({ vehicleNumber });
  }

  onChangePriority(priority) {
    this.setState({ priority });
  }

  gotoCryptoKeys() {
    let context = URLContext.getContext();
    context.page = "cryptoKeys";
    URLContext.setContext(context);
    window.location.reload(true);
  }

  renderInner() {
    const keyPair = Crypto.getKeyPairFromLocalStorage();
    if (!keyPair.secretKey) {
      return (
        <Alert
          severity="error"
          onClick={this.gotoCryptoKeys}
          sx={{ cursor: "pointer" }}
        >
          {t("You need Crypto Keys to genenerate a token.")}
        </Alert>
      );
    }

    const { vehicleNumber, priority } = this.state;
    const areAllValid =
      Validate.vehicleNumber(vehicleNumber) && Validate.priority(priority);

    return (
      <Box>
        <InputVehicleNumber
          selectedVehicleNumber={vehicleNumber}
          onChangeVehicleNumber={this.onChangeVehicleNumber.bind(this)}
        />
        <InputPriority
          selectedPriority={priority}
          onChangePriority={this.onChangePriority.bind(this)}
        />
        <Button
          onClick={this.onClickCreateToken.bind(this)}
          variant="contained"
          startIcon={<NoteAddIcon />}
          disabled={!areAllValid}
        >
          {t("Create Token")}
        </Button>
      </Box>
    );
  }

  render() {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        {this.renderInner()}
      </Stack>
    );
  }
}
