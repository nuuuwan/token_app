import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import HighlightEnts from "../../view/atoms/HighlightEnts";

export default function MultiLines({ lines, entsList, entsListEn, color }) {
  return (
    <Box>
      {lines.map(function (line, iLine) {
        const ents = entsList ? entsList[iLine] : null;
        const entsEn = entsListEn ? entsListEn[iLine] : null;
        return (
          <Typography
            key={"body-line-mandatory" + iLine}
            variant="body1"
            sx={{
              marginBottom: 2,
              marginTop: 1,
              color: color,
            }}
          >
            <HighlightEnts text={line} ents={ents} entsEn={entsEn} />
          </Typography>
        );
      })}
    </Box>
  );
}
