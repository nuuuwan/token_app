import { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Crypto from "../../nonview/base/Crypto";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";
import URLContext from "../../nonview/base/URLContext";

export default class CreateTokenPage extends Component {
  onClickCreateToken() {
    const currentTimeUT = TimeX.getUnixTime();
    const token = Crypto.encryptToken({
      vehicleNumber: "ABC-1234",
      priority: 12,
      timeCreatedUT: currentTimeUT,
      timeExpiryUT: currentTimeUT + SECONDS_IN.DAY,
    });

    let context = URLContext.getContext();
    context.token = token;
    context.page = "viewToken";
    URLContext.setContext(context);
    window.location.reload(true);
  }

  render() {
    return (
      <Stack spacing={2}>
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
