import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import KeyIcon from "@mui/icons-material/Key";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ViewListIcon from "@mui/icons-material/ViewList";

import URLContext from "../../nonview/base/URLContext";

export default function HomePageBottomNavigation({
  timeLatestRefresh,
  onSelectLanguage,
}) {
  const onClickOpenPage = function (page) {
    let context = URLContext.getContext();
    context.page = page;
    URLContext.setContext(context);
    window.location.reload(true);
  };

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
