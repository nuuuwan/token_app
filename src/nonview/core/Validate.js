export default class Validate {
  static isLetter(x) {
    return x.toLowerCase() !== x.toUpperCase();
  }

  static isInteger(x) {
    return Number.isInteger(parseInt(x));
  }

  static cryptoKey(cryptoKey) {
    if (!cryptoKey) {
      return false;
    }
    return cryptoKey.length === 44;
  }

  static priority(priority) {
    if (!Validate.isInteger(priority)) {
      return false;
    }
    const priorityInt = parseInt(priority);
    if (priorityInt < 1 || priorityInt > 10_000) {
      return false;
    }
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
    if (!Validate.isLetter(tokens[0])) {
      return false;
    }

    if (tokens[1].length !== 4) {
      return false;
    }
    if (!Validate.isInteger(tokens[1])) {
      return false;
    }

    return true;
  }
}
