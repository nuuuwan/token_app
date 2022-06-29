import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import HelpMenu from "./HelpMenu.js";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
};

export default function CustomAppBar() {
  return (
    <Box sx={STYLE}>
      <Toolbar>
        <HelpMenu />
      </Toolbar>
    </Box>
  );
}
