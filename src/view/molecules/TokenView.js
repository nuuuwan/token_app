import QRCode from "react-qr-code";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TimeX from "../../nonview/base/TimeX";

import IconText from "../../view/molecules/IconText";
import LabelledText from "../../view/molecules/LabelledText";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";

export default function TokenView({ tokenInfo, short }) {
  const { payload, publicKey, url } = tokenInfo;
  const isExpired = payload.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";

  const onClick = function () {
    window.history.pushState("", "", url);
    window.location.reload(true);
  };

  const renderedSource = <TrustedSourceView publicKey={publicKey} />;

  if (short) {
    return (
      <Card sx={{ m: 1, p: 3, cursor: "pointer" }} onClick={onClick}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <QRCode value={url} size={100} />
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <IconText label="Vehicle Number" text={payload.vehicleNumber} />
            <IconText label="Priority" text={payload.priority} />
            <IconText
              label="Time Expiry"
              text={TimeX.formatTime(payload.timeExpiryUT)}
              color={color}
            />
          </Box>
        </Box>
        {renderedSource}
      </Card>
    );
  } else {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 3 }}>
        <Typography variant="h4">Token</Typography>
        {renderedSource}
        <QRCode value={url} />
        <Box>
          <LabelledText label="Vehicle Number" text={payload.vehicleNumber} />
          <LabelledText label="Priority" text={payload.priority} />
          <LabelledText
            label="Time Expiry"
            text={TimeX.formatTime(payload.timeExpiryUT)}
            color={color}
          />

          <LabelledText
            label="Time Created"
            text={TimeX.formatTime(payload.timeCreatedUT)}
          />
          <LabelledText label="Public Key" text={publicKey} />
        </Box>
      </Stack>
    );
  }
}
