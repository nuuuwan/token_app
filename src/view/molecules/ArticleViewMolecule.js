import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import I18N, { t, LANG_IDX, BASE_LANG } from "../../nonview/base/I18N";

import AlignCenter from "../../view/atoms/AlignCenter";
import Condition from "../../view/atoms/Condition";
import HighlightEnts from "../../view/atoms/HighlightEnts";
import MiddleDot from "../../view/atoms/MiddleDot";
import LimitWords from "../../view/molecules/LimitWords";

export default function ArticleViewMolecule({ article }) {
  const currentLang = I18N.getLang();
  let originalLang = article.originalLang;

  const text = article.textIDX[currentLang];
  const title = text.title;
  const bodyLines = text.bodyLines;
  const author = text.author;

  const textEn = article.textIDX[BASE_LANG];

  const titleEnts = text.titleEnts;
  const bodyLineEntsList = text.bodyLineEntsList;

  const titleEntsEn = textEn.titleEnts;
  const bodyLineEntsListEn = textEn.bodyLineEntsList;

  const isInOriginalLang = originalLang === currentLang;

  const originalLangObj = LANG_IDX[originalLang];
  return (
    <Box>
      <Typography variant="h5" color={originalLangObj.color}>
        <HighlightEnts text={title} ents={titleEnts} entsEn={titleEntsEn} />
      </Typography>

      <Link href={article.url} target="_blank" sx={{ textDecoration: "none" }}>
        <AlignCenter>
          <Typography variant="caption" color="secondary">
            {article.urlShort}
          </Typography>

          <Condition condition={author}>
            <MiddleDot />
            <Typography variant="caption" color="secondary">
              {author}
            </Typography>
          </Condition>

          <MiddleDot />
          <Typography variant="caption" color="secondary">
            {article.timeStrHumanized}
          </Typography>
        </AlignCenter>

        <Condition condition={!isInOriginalLang}>
          <Typography
            variant="subtitle1"
            color={originalLangObj.color}
            sx={{ opacity: 0.5 }}
          >
            {t("Translated from the 000 Language", t(originalLangObj.labelEn))}
          </Typography>
        </Condition>
      </Link>

      <LimitWords
        lines={bodyLines}
        entsList={bodyLineEntsList}
        entsListEn={bodyLineEntsListEn}
        wordLimit={50}
      />

      <Condition condition={!article}>
        <Alert severity="warning">
          {t("This article is yet to be translated. Try again later.")}
        </Alert>
      </Condition>
    </Box>
  );
}
