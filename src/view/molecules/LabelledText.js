import Typography from "@mui/material/Typography";

export default function LabelledText({ label, text, color }) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ fontSize: "67%" }}>
        {label}
      </Typography>
      <Typography variant="body1" color={color}>
        {text}
      </Typography>
    </>
  );
}
