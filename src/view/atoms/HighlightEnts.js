import Link from "@mui/material/Link";

import URLContext from "../../nonview/base/URLContext";

function getAnnotatedPairs(text, ents, entsEn) {
  let i = 0;
  let parts = [];
  while (i < text.length) {
    let minJ = undefined;
    let minIEnt = undefined;

    for (let iEnt in ents) {
      const ent = ents[iEnt];
      const needle = ent.text;
      const j = text.indexOf(needle, i);
      if (j !== -1) {
        if (minJ === undefined || j < minJ) {
          minJ = j;
          minIEnt = iEnt;
        }
      }
    }

    if (minJ !== undefined) {
      parts.push({
        text: text.substring(i, minJ),
        textEn: null,
        entLabel: false,
      });
      const minEnt = ents[minIEnt];
      const minEntEn = entsEn[minIEnt];

      parts.push({
        text: minEnt.text,
        textEn: minEntEn.text,
        entLabel: minEnt.label,
      });

      i = minJ + minEnt.text.length;
    } else {
      parts.push({
        text: text.substring(i, minJ),
        textEn: null,
        entLabel: false,
      });
      break;
    }
  }
  return parts;
}

const STYLE_REGULAR = {
  opacity: 0.5,
};

const STYLE_ENT_THING = {
  fontWeight: "bold",
};

const STYLE_ENT_NUMBER = {
  opacity: 0.8,
};

const STYLE_LINK = {
  textDecoration: "none",
  color: "inherit",
};

export default function HighlightEnts({ text, ents, entsEn }) {
  if (!ents) {
    return text;
  }

  const annotatedPairs = getAnnotatedPairs(text, ents, entsEn);
  return annotatedPairs.map(function ({ text, textEn, entLabel }, iItem) {
    const key = "item-" + iItem + text;
    if (entLabel === false) {
      return (
        <span key={key} style={STYLE_REGULAR}>
          {text}
        </span>
      );
    }

    if (
      [
        "CARDINAL",
        "DATE",
        "MONEY",
        "ORDINAL",
        "PERCENT",
        "QUANTITY",
        "TIME",
      ].includes(entLabel)
    ) {
      return (
        <span key={key} style={STYLE_ENT_NUMBER}>
          {text}
        </span>
      );
    }

    const onClick = function () {
      let context = URLContext.getContext();
      context.ent = textEn.replaceAll("the ", "").replaceAll("The ", "").trim();
      URLContext.setContext(context);
      window.location.reload(true);
    };

    return (
      <Link key={key} style={STYLE_LINK} onClick={onClick}>
        <span style={STYLE_ENT_THING}>{text}</span>
      </Link>
    );
  });
}
