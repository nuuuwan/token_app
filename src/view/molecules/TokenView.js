import QRCode from "react-qr-code";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import TimeX from "../../nonview/base/TimeX";
import WWW from "../../nonview/base/WWW";

import AppColors from "../../view/_constants/AppColors";
import LabelledText from "../../view/molecules/LabelledText";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";

export default function TokenView({ tokenInfo, short }) {
  let { payload, publicKey, url } = tokenInfo;
  url = url.replaceAll("mode:issuer", "mode:receiver");

  const isExpired = payload.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";

  const onClick = function () {
    WWW.open(url);
  };

  const renderedSource = <TrustedSourceView publicKey={publicKey} />;

  if (short) {
    return (
      <Card sx={{ m: 1, p: 3, cursor: "pointer" }} onClick={onClick}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <QRCode value={url} size={100} fgColor={AppColors.QRCode} />
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <LabelledText
              label="Vehicle Number"
              text={payload.vehicleNumber}
              noLabel
            />
            <LabelledText label="Priority" text={payload.priority} noLabel />
            <LabelledText
              label="Expiration"
              text={TimeX.formatTime(payload.timeExpiryUT)}
              color={color}
              noLabel
            />
          </Box>
        </Box>
        {renderedSource}
      </Card>
    );
  } else {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 3 }}>
        <QRCode value={url} fgColor={AppColors.QRCode} />
        <Box>
          <LabelledText label="Vehicle Number" text={payload.vehicleNumber} />
          <LabelledText label="Priority" text={payload.priority} />
          <LabelledText
            label="Expiration"
            text={TimeX.formatTime(payload.timeExpiryUT)}
            color={color}
          />

          <LabelledText
            label="Creation"
            text={TimeX.formatTime(payload.timeCreatedUT)}
          />
          <LabelledText label="Public Key" text={publicKey} />
          {renderedSource}
        </Box>
      </Stack>
    );
  }
}
