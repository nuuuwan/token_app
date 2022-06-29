import { t } from "../../nonview/base/I18N";

export const SECONDS_IN = {
  MINUTE: 60,
  HOUR: 3_600,
  DAY: 86_400,
};

export const HOURS_IN = {
  DAY: 24,
  YEAR: 24 * 365.25,
};

const DATE_FORMAT_LOCALE = "en-GB";
const DATE_FORMAT_OPTIONS = {
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export default class TimeX {
  static getUnixTime() {
    return parseInt(new Date() / 1_000.0);
  }

  static parseTime(timeStr) {
    return new Date(timeStr) / 1_000.0;
  }

  static formatTime(ut) {
    if (ut < SECONDS_IN.DAY) {
      return "";
    }

    return new Date(ut * 1_000.0).toLocaleString(
      DATE_FORMAT_LOCALE,
      DATE_FORMAT_OPTIONS
    );
  }

  static getHumanTime(ut) {
    const delta = TimeX.getUnixTime() - ut;
    for (let [duration, label] of [
      [SECONDS_IN.DAY, "day"],
      [SECONDS_IN.HOUR, "hour"],
      [SECONDS_IN.MINUTE, "minute"],
    ]) {
      if (delta > duration) {
        const x = parseInt(delta / duration);
        const pluralStr = x === 1 ? "" : "s";
        return t(`000 ${label}${pluralStr} ago`, x);
      }
    }

    return t("Now");
  }
}
