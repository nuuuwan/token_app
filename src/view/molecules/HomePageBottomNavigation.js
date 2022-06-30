import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import KeyIcon from "@mui/icons-material/Key";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ViewListIcon from "@mui/icons-material/ViewList";

export default function HomePageBottomNavigation({ onClickOpenPage }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
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
        <BottomNavigationAction
          label="My Tokens"
          icon={<ViewListIcon />}
          onClick={() => onClickOpenPage("tokenList")}
        />
      </BottomNavigation>
    </Paper>
  );
}
