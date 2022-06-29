import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const STYLE_KEY = {
  wordBreak: "break-all",
};

export default function CryptoKeyView({ label, cryptoKey, color, message }) {
  if (!cryptoKey) {
    return null;
  }
  return (
    <Stack spacing={2} sx={{ color: color }}>
      <Typography variant="h6" color="inherit">
        {label}
      </Typography>
      <Alert severity={"info"}>{message}</Alert>
      <Typography variant="body1" style={STYLE_KEY} color="inherit">
        {cryptoKey}
      </Typography>
    </Stack>
  );
}

// import CryptoKeyView from "../../view/atoms/CryptoKeyView";
