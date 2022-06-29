import TrustedSource from "../../nonview/core/TrustedSource";
import Alert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AlignCenter from "../../view/atoms/AlignCenter";
import Typography from "@mui/material/Typography";

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
