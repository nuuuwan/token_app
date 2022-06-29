import DICTIONARY from "../../nonview/base/DICTIONARY";
import IDX from "../../nonview/base/IDX";

export const BASE_LANG = "en";
const CACHE_KEY_LANG = "CACHE_KEY_LANG";
const REPLACE_WILDCARD = "000";

class Lang {
  constructor(lang, label, labelEn, shortLabel, color) {
    this.lang = lang;
    this.label = label;
    this.labelEn = labelEn;
    this.shortLabel = shortLabel;
    this.color = color;
  }
}

export const LANG_LIST = [
  new Lang("en", "English", "English", "En", "#080"),
  new Lang("ta", "தமிழ்", "Tamil", "த", "#f80"),
  new Lang("si", "සිංහල", "Sinhala", "සිං", "#800"),
];

export const LANG_IDX = IDX.build(
  LANG_LIST,
  (d) => d.lang,
  (d) => d
);

export default class I18N {
  static getLang() {
    let browserLang = localStorage.getItem(CACHE_KEY_LANG);
    if (!browserLang) {
      browserLang = "en";
      localStorage.setItem(CACHE_KEY_LANG, browserLang);
    }
    return browserLang;
  }

  static setLang(browserLang) {
    localStorage.setItem(CACHE_KEY_LANG, browserLang);
  }

  static translate(s) {
    if (!s) {
      return "";
    }
    s = s.trim();
    if (!s || !s.trim()) {
      return s;
    }

    const entry = DICTIONARY[s];
    if (!entry) {
      console.warn(`[I18N] ${s}`);
      return s;
    }

    const currentLang = I18N.getLang();
    if (currentLang === BASE_LANG) {
      return s;
    }

    const translation = entry[currentLang];
    if (!translation) {
      console.warn(`[I18N] ${s}`);
      return s;
    }

    return translation;
  }
}

export function t(s, value = "") {
  let translatedS = I18N.translate(s);
  if (value) {
    return translatedS.replaceAll(REPLACE_WILDCARD, value);
  }
  return translatedS;
}
