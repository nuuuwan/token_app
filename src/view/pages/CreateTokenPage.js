import { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TokenView from "../../view/molecules/TokenView";

import Crypto from "../../nonview/base/Crypto";
import TimeX, { SECONDS_IN } from "../../nonview/base/TimeX";

export default class CreateTokenPage extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
  }

  async componentDidMount() {}

  onClickCreateToken() {
    const currentTimeUT = TimeX.getUnixTime();
    const token = Crypto.createToken({
      vehicleNumber: "ABC-1234",
      timeCreatedUT: currentTimeUT,
      timeExpiryUT: currentTimeUT + SECONDS_IN.DAY,
    });
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return (
      <Stack spacing={2}>
        <Button
          onClick={this.onClickCreateToken.bind(this)}
          variant="contained"
          startIcon={<NoteAddIcon />}
        >
          Create Token
        </Button>
        <TokenView token={token} />
      </Stack>
    );
  }
}
