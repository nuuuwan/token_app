import { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Crypto from "../../nonview/base/Crypto";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import URLContext from "../../nonview/base/URLContext";
import InputVehicleNumber from "../../view/molecules/InputVehicleNumber";

export default class CreateTokenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNumber: "ABC-1234",
      priority: 12,
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

  render() {
    const { vehicleNumber, priority } = this.state;
    return (
      <Stack spacing={2}>
        <InputVehicleNumber
          selectedVehicleNumber={vehicleNumber}
          onChangeVehicleNumber={this.onChangeVehicleNumber.bind(this)}
        />
        <Button
          onClick={this.onClickCreateToken.bind(this)}
          variant="contained"
          startIcon={<NoteAddIcon />}
        >
          Create Token
        </Button>
      </Stack>
    );
  }
}
