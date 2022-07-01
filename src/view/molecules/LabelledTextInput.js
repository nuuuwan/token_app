import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import AppColors from "../../view/_constants/AppColors";
import IconLabel from "../../view/molecules/IconLabel";

export default function LabelledTextInput({
  label,
  text,
  onChange,
  multiline,
  color,
  children,
  isValid,
}) {
  const onChangeInner = function (e) {
    onChange(e.target.value);
  };
  const backgroundColor = isValid ? AppColors.Valid : AppColors.Invalid;
  return (
    <Box sx={{ p: 0.5 }}>
      <IconLabel label={label} star>
        {children}
      </IconLabel>
      <TextField
        value={text}
        onChange={onChangeInner}
        multiline={Boolean(multiline)}
        sx={{ width: "95%", backgroundColor: backgroundColor }}
      />
    </Box>
  );
}
