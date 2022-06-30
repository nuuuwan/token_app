import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import KeyIcon from "@mui/icons-material/Key";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ViewListIcon from "@mui/icons-material/ViewList";
import URLContext from "../../nonview/base/URLContext";
import Condition from "../../view/atoms/Condition";
export default function HomePageBottomNavigation({ onClickOpenPage }) {
  const context = URLContext.getContext();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <Condition condition={context.mode === "issuer"}>
          <BottomNavigationAction
            label="Crypto Keys"
            icon={<KeyIcon />}
            onClick={() => onClickOpenPage("cryptoKeys")}
          />
          <BottomNavigationAction
            label="Create Token"
            icon={<NoteAddIcon />}
            onClick={() => onClickOpenPage("createToken")}
          />
        </Condition>
        <BottomNavigationAction
          label="Scan Token"
          icon={<QrCodeScannerIcon />}
          onClick={() => onClickOpenPage("scanToken")}
        />
        <BottomNavigationAction
          label="My Tokens"
          icon={<ViewListIcon />}
          onClick={() => onClickOpenPage("tokenList")}
        />
      </BottomNavigation>
    </Paper>
  );
}
