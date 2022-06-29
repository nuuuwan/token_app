import LabelledTextInput from "../../view/molecules/LabelledTextInput";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

function isValid(vehicleNumber) {
  const tokens = vehicleNumber.split("-");
  if (tokens.length !== 2) {
    return false;
  }

  if (![2, 3].includes(tokens[0].length)) {
    return false;
  }
  if (!isLetter(tokens[0])) {
    return false;
  }

  if (tokens[1].length !== 4) {
    return false;
  }
  if (!Number.isInteger(parseInt(tokens[1]))) {
    return false;
  }

  return true;
}

export default function InputVehicleNumber({
  selectedVehicleNumber,
  onChangeVehicleNumber,
}) {
  let severity, alertText;
  if (selectedVehicleNumber.trim().length === 0) {
    severity = "error";
    alertText = "A valid vehicle number is required to generate a token.";
  } else if (isValid(selectedVehicleNumber)) {
    severity = "success";
    alertText = "Looks good!";
  } else {
    severity = "error";
    alertText =
      "A valid vehicle number should have the format AB-1234 or ABC-1234";
  }

  return (
    <Box>
      <LabelledTextInput
        label="Vehicle Number"
        text={selectedVehicleNumber}
        onChange={onChangeVehicleNumber}
      />
      <Alert severity={severity}>{alertText}</Alert>
    </Box>
  );
}

// import InputVehicleNumber from "../../view/atoms/InputVehicleNumber";
