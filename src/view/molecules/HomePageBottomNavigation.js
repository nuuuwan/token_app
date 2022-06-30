import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import KeyIcon from "@mui/icons-material/Key";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ViewListIcon from "@mui/icons-material/ViewList";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

const CONFIG_LIST = [
  {
    label: "Crypto Keys",
    Icon: KeyIcon,
    page: "cryptoKeys",
    showInOnlyAdminMode: true,
  },
  {
    label: "Create Token",
    Icon: NoteAddIcon,
    page: "createToken",
    showInOnlyAdminMode: true,
  },
  {
    label: "Scan Token",
    Icon: QrCodeScannerIcon,
    page: "scanToken",
    showInOnlyAdminMode: false,
  },
  {
    label: "My Tokens",
    Icon: ViewListIcon,
    page: "tokenList",
    showInOnlyAdminMode: false,
  },
];

export default function HomePageBottomNavigation({ onClickOpenPage }) {
  const context = URLContext.getContext();

  const isAdminMode = context.mode === "issuer";
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        {CONFIG_LIST.map(function (config) {
          const key = "button-" + config.page;
          if (config.showInOnlyAdminMode && !isAdminMode) {
            return null;
          }
          return (
            <Tooltip title={t(config.label)}>
              <BottomNavigationAction
                key={key}
                icon={<config.Icon />}
                onClick={() => onClickOpenPage(config.page)}
              />
            </Tooltip>
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
