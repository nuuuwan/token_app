import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import AppColors from "../../view/_constants/AppColors";
import HelpMenu from "./HelpMenu.js";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,
};

export default function CustomAppBar({ title }) {
  const isAdminMode = URLContext.getContext().mode === "issuer";
  const color = isAdminMode ? AppColors.Issuer : AppColors.Receiver;
  return (
    <Box sx={STYLE}>
      <AppBar sx={{ backgroundColor: color }} elevation={10}>
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
