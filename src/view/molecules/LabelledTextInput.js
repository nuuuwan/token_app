import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import IconLabel from "../../view/molecules/IconLabel";

export default function LabelledTextInput({
  label,
  text,
  onChange,
  multiline,
  color,
  children,
}) {
  const onChangeInner = function (e) {
    onChange(e.target.value);
  };
  return (
    <Box sx={{ p: 0.5 }}>
      <IconLabel label={label} star>
        {children}
      </IconLabel>
      <TextField
        value={text}
        onChange={onChangeInner}
        multiline={Boolean(multiline)}
        required
        sx={{ width: "80%" }}
      />
    </Box>
  );
}
