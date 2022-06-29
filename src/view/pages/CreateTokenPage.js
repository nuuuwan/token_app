import { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Crypto from "../../nonview/base/Crypto";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import URLContext from "../../nonview/base/URLContext";
import InputVehicleNumber from "../../view/molecules/InputVehicleNumber";
import InputPriority from "../../view/molecules/InputPriority";
import Validate from "../../nonview/core/Validate";

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

  render() {
    const { vehicleNumber, priority } = this.state;
    const areAllValid =
      Validate.vehicleNumber(vehicleNumber) && Validate.priority(priority);

    return (
      <Stack spacing={2}>
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
          Create Token
        </Button>
      </Stack>
    );
  }
}
