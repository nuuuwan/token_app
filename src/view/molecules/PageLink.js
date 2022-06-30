import Button from "@mui/material/Button";

import { PAGE_CONFIG_IDX } from "../../view/pages/PAGE_CONFIG_LIST";

export default function PageLink({ page, onClickOpenPage }) {
  const onClick = function () {
    onClickOpenPage(page);
  };

  const config = PAGE_CONFIG_IDX[page];
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={<config.Icon />}
      sx={{ backgroundColor: config.color }}
    >
      {config.label}
    </Button>
  );
}
