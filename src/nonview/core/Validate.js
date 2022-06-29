function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

export default class Validate {
  static priority(priority) {
    const priorityInt = parseInt(priority);
    if (!Number.isInteger(priorityInt)) {
      return false;
    }
    if (priorityInt < 1 || priorityInt > 10_000) {
      return false;
    }
    console.debug({ priorityInt });
    return true;
  }

  static vehicleNumber(vehicleNumber) {
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
}
