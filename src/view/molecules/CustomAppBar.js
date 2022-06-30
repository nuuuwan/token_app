import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import AppColors from "../../view/_constants/AppColors";
import AlignCenter from "../../view/atoms/AlignCenter";
import HelpMenu from "./HelpMenu.js";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,
};

export default function CustomAppBar({ title, Icon }) {
  const isAdminMode = URLContext.getContext().mode === "issuer";
  const color = isAdminMode ? AppColors.Issuer : AppColors.Receiver;
  return (
    <Box sx={STYLE}>
      <AppBar sx={{ backgroundColor: color }} elevation={10}>
        <Toolbar>
          <AlignCenter>
            <Icon sx={{ marginRight: 1 }} />
            <Typography variant="h6" component="div">
              {t(title)}
            </Typography>
          </AlignCenter>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {" "}
          </Typography>
          <HelpMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
