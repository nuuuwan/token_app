import QRCode from "react-qr-code";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TimeX from "../../nonview/base/TimeX";

import LabelledText from "../../view/molecules/LabelledText";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";

export default function TokenView({ payload, publicKey, url }) {
  const isExpired = payload.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";
  return (
    <Box sx={{ m: 1, p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Token</Typography>
        <TrustedSourceView publicKey={publicKey} />
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
        </Box>
      </Stack>
    </Box>
  );
}
