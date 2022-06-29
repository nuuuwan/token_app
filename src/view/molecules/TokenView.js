import QRCode from "react-qr-code";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TimeX from "../../nonview/base/TimeX";

import LabelledText from "../../view/molecules/LabelledText";

export default function TokenView({ payload, url }) {
  const isExpired = payload.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";
  return (
    <Box sx={{ m: 1, p: 3 }}>
      <Typography variant="h6">Token</Typography>
      <QRCode value={url} size={200} />

      <LabelledText label="Vehicle Number" text={payload.vehicleNumber} />
      <LabelledText
        label="Time Created"
        text={TimeX.formatTime(payload.timeCreatedUT)}
      />
      <LabelledText
        label="Time Expiry"
        text={TimeX.formatTime(payload.timeExpiryUT)}
        color={color}
      />
    </Box>
  );
}
