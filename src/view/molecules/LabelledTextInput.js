import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function LabelledTextInput({ label, text, onChange }) {
  const onChangeInner = function (e) {
    onChange(e.target.value);
  };
  return (
    <Box sx={{ p: 0.5 }}>
      <Typography variant="subtitle1" sx={{ fontSize: "67%" }}>
        {label}
      </Typography>
      <TextField value={text} onChange={onChangeInner} />
    </Box>
  );
}
