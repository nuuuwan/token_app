import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import TrustedSource from "../../nonview/core/TrustedSource";

import AlignCenter from "../../view/atoms/AlignCenter";

export default function TrustedSourceView({ publicKey }) {
  const trustedSource = TrustedSource.getFromPublicKey(publicKey);
  if (!trustedSource) {
    return <Alert severity="error">Issued by an unknown source</Alert>;
  }
  return (
    <AlignCenter>
      <Typography color="green">{"Issued by " + trustedSource.name}</Typography>
      <CheckCircleIcon sx={{ color: "green", fontSize: "100%" }} />
    </AlignCenter>
  );
}
