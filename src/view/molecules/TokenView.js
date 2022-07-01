import QRCode from "react-qr-code";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import TimeX from "../../nonview/base/TimeX";
import WWW from "../../nonview/base/WWW";
import TimeView from "../../view/atoms/TimeView";
import AppColors from "../../view/_constants/AppColors";
import LabelledText from "../../view/molecules/LabelledText";
import TrustedSourceView from "../../view/molecules/TrustedSourceView";

export default function TokenView({ token, short }) {
  const isExpired = token.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";
  const url = token.url;
  const onClick = function () {
    WWW.open(url);
  };

  const renderedSource = (
    <TrustedSourceView publicKey={token.issuerPublicKey} />
  );

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
              text={token.vehicleNumber}
              noLabel
            />
            <LabelledText label="Priority" text={token.priority} noLabel />
            <LabelledText
              label="Expiration"
              text={<TimeView ut={token.timeExpiryUT} />}
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
          <LabelledText label="Vehicle Number" text={token.vehicleNumber} />
          <LabelledText label="Priority" text={token.priority} />
          <LabelledText
            label="Expiration"
            text={<TimeView ut={token.timeExpiryUT} />}
            color={color}
          />

          <LabelledText
            label="Creation"
            text={<TimeView ut={token.timeCreatedUT} />}
          />
          <LabelledText label="Public Key" text={token.issuerPublicKey} />
          {renderedSource}
        </Box>
      </Stack>
    );
  }
}
