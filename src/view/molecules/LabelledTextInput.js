import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { t } from "../../nonview/base/I18N";

export default function LabelledTextInput({
  label,
  text,
  onChange,
  multiline,
  color,
}) {
  const onChangeInner = function (e) {
    onChange(e.target.value);
  };
  return (
    <Box sx={{ p: 0.5 }}>
      <Typography variant="subtitle1" sx={{ fontSize: "67%", color }}>
        {t(label)}
      </Typography>
      <TextField
        value={text}
        onChange={onChangeInner}
        multiline={Boolean(multiline)}
      />
    </Box>
  );
}
