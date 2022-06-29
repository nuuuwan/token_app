import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LabelledText({ label, text, color }) {
  return (
    <Box sx={{ p: 0.5 }}>
      <Typography variant="subtitle1" sx={{ fontSize: "67%" }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "133%", color, wordWrap:"break-word" }}>
        {text}
      </Typography>
    </Box>
  );
}
