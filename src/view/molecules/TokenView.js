import Typography from "@mui/material/Typography";

const STYLE_TOKEN = {
  wordBreak: "break-all",
};

export default function TokenView({ token }) {
  if (!token) {
    return null;
  }
  return <Typography sx={STYLE_TOKEN}>{JSON.stringify(token)}</Typography>;
}
