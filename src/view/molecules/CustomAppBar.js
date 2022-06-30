import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import HelpMenu from "./HelpMenu.js";
import Typography from "@mui/material/Typography";
import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
};

export default function CustomAppBar({ title }) {
  const isAdminMode = URLContext.getContext().mode === "issuer";
  const color = isAdminMode ? "darkblue" : "maroon";
  return (
    <Box sx={STYLE}>
      <AppBar sx={{ backgroundColor: color }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t(title)}
          </Typography>
          <HelpMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
