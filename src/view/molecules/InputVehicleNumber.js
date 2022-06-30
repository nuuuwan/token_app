import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import Validate from "../../nonview/core/Validate";

import LabelledTextInput from "../../view/molecules/LabelledTextInput";

export default function InputVehicleNumber({
  selectedVehicleNumber,
  onChangeVehicleNumber,
}) {
  let severity, alertText;
  if (selectedVehicleNumber.trim().length === 0) {
    severity = "error";
    alertText = "A valid vehicle number is required to generate a token.";
  } else if (Validate.vehicleNumber(selectedVehicleNumber)) {
    severity = "success";
    alertText = "Looks good!";
  } else {
    severity = "error";
    alertText =
      "A valid vehicle number should have the format AB-1234 or ABC-1234";
  }

  const onChangeInner = function (newVehicleNumber) {
    newVehicleNumber = newVehicleNumber.toUpperCase();

    for (let i of [1, 2]) {
      const cLetter = newVehicleNumber.substring(i, i + 1);
      const cInteger = newVehicleNumber.substring(i + 1, i + 2);

      if (Validate.isLetter(cLetter) && Validate.isInteger(cInteger)) {
        newVehicleNumber =
          newVehicleNumber.substring(0, i + 1) +
          "-" +
          newVehicleNumber.substring(i + 1);
      }
    }

    onChangeVehicleNumber(newVehicleNumber);
  };

  return (
    <Box>
      <LabelledTextInput
        label="Vehicle Number"
        text={selectedVehicleNumber}
        onChange={onChangeInner}
      />
      <Alert severity={severity}>{alertText}</Alert>
    </Box>
  );
}

// import InputVehicleNumber from "../../view/atoms/InputVehicleNumber";
