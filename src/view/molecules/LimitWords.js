import { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { t } from "../../nonview/base/I18N";

import AlignRight from "../../view/atoms/AlignRight";
import Condition from "../../view/atoms/Condition";
import MultiLines from "../../view/molecules/MultiLines";

export default function LimitWords({ lines, entsList, entsListEn, wordLimit }) {
  if (!lines) {
    lines = [];
  }
  let mandatoryLines = [],
    optionalLines = [];
  let wordCount = 0;
  for (let line of lines) {
    const words = line.split(" ");
    if (wordCount < wordLimit) {
      mandatoryLines.push(line);
    } else {
      optionalLines.push(line);
    }
    wordCount += words.length;
  }

  const [show, setShow] = useState(false);

  const onClickShowMore = function () {
    setShow(true);
  };

  const onClickShowLess = function () {
    setShow(false);
  };

  let mandatoryEntsList,
    optionalEntsList,
    mandatoryEntsListEn,
    optionalEntsListEn;
  if (entsList) {
    mandatoryEntsList = entsList.slice(0, mandatoryLines.length);
    optionalEntsList = entsList.slice(mandatoryLines.length);

    mandatoryEntsListEn = entsListEn.slice(0, mandatoryLines.length);
    optionalEntsListEn = entsListEn.slice(mandatoryLines.length);
  }

  return (
    <Box>
      <MultiLines
        lines={mandatoryLines}
        entsList={mandatoryEntsList}
        entsListEn={mandatoryEntsListEn}
        color="black"
      />
      <Condition condition={!show && optionalLines.length > 0}>
        <AlignRight>
          <IconButton onClick={onClickShowMore} sx={{ color: "lightgray" }}>
            <ExpandMoreIcon />
            <Typography variant="caption">{t("Read more")}</Typography>
          </IconButton>
        </AlignRight>
      </Condition>

      <Condition condition={show && mandatoryLines.length > 0}>
        <MultiLines
          lines={optionalLines}
          entsList={optionalEntsList}
          entsListEn={optionalEntsListEn}
          color="gray"
        />
        <AlignRight>
          <IconButton onClick={onClickShowLess} sx={{ color: "lightgray" }}>
            <ExpandLessIcon />
            <Typography variant="caption">{t("Read less")}</Typography>
          </IconButton>
        </AlignRight>
      </Condition>
    </Box>
  );
}
