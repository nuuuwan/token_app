import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

import LabelledTextInput from "../../view/molecules/LabelledTextInput";

export default function InputPriority({ selectedPriority, onChangePriority }) {
  let severity, alertText;
  if (selectedPriority.toString().trim().length === 0) {
    severity = "error";
    alertText = "A priority value is required to generate a token.";
  } else if (Validate.priority(selectedPriority)) {
    severity = "success";
    alertText = "Looks good!";
  } else {
    severity = "error";
    alertText =
      "A valid priority value must be an number between 1 and 10,000.";
  }

  const onChangeInner = function (newPriority) {
    newPriority = parseInt(newPriority);
    if (!Validate.isInteger(newPriority)) {
      newPriority = "";
    }
    onChangePriority(newPriority);
  };

  return (
    <Box>
      <LabelledTextInput
        label="Priority"
        text={selectedPriority}
        onChange={onChangeInner}
      />
      <Alert severity={severity}>{t(alertText)}</Alert>
    </Box>
  );
}
