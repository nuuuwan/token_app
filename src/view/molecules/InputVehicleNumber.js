import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { t } from "../../nonview/base/I18N";
import Validate from "../../nonview/core/Validate";

import LabelledTextInput from "../../view/molecules/LabelledTextInput";

export default function InputVehicleNumber({
  selectedVehicleNumber,
  onChangeVehicleNumber,
}) {
  let alertText = undefined;
  if (selectedVehicleNumber && !Validate.vehicleNumber(selectedVehicleNumber)) {
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
      {alertText ? <Alert severity="error">{t(alertText)}</Alert> : null}
    </Box>
  );
}

// import InputVehicleNumber from "../../view/atoms/InputVehicleNumber";
