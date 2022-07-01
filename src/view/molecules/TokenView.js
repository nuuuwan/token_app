import QRCode from "react-qr-code";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import TimeX from "../../nonview/base/TimeX";
import WWW from "../../nonview/base/WWW";

import AppColors from "../../view/_constants/AppColors";
import TimeView from "../../view/atoms/TimeView";
import LabelledText from "../../view/molecules/LabelledText";
import { TRUSTED_ISSUER_IDX } from "../../nonview/core/TrustedIssuer";
import TrustedIssuerView from "../../view/molecules/TrustedIssuerView";

export default function TokenView({ token, short }) {
  const isExpired = token.timeExpiryUT < TimeX.getUnixTime();
  const color = isExpired ? "red" : "darkgreen";
  const url = token.url;
  const onClick = function () {
    WWW.open(url);
  };

  const trustedIssuer = TRUSTED_ISSUER_IDX[token.issuerPublicKey];
  const renderedSource = (
    <TrustedIssuerView trustedIssuer={trustedIssuer} short={short} />
  );
  const renderedExpirationWarning = isExpired ? (
    <Alert severity="error">This Token has Expired</Alert>
  ) : null;

  if (short) {
    return (
      <Card
        sx={{ m: 0, p: 1, marginBottom: 3, cursor: "pointer" }}
        onClick={onClick}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <QRCode value={url} size={150} fgColor={AppColors.QRCode} />
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
        {renderedExpirationWarning}
      </Card>
    );
  } else {
    return (
      <Stack spacing={1} sx={{ m: 1, p: 1 }}>
        <QRCode value={url} fgColor={AppColors.QRCode} />
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
        {renderedSource}
        {renderedExpirationWarning}
      </Stack>
    );
  }
}
