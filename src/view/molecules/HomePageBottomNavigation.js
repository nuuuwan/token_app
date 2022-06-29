import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import KeyIcon from "@mui/icons-material/Key";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RefreshIcon from "@mui/icons-material/Refresh";

import URLContext from "../../nonview/base/URLContext";

export default function HomePageBottomNavigation({
  timeLatestRefresh,
  onSelectLanguage,
}) {
  const onClickRefresh = function () {
    window.location.reload(true);
  };

  const onClickOpenPage = function (page) {
    let context = URLContext.getContext();
    context.page = page;
    URLContext.setContext(context);
    onClickRefresh();
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          icon={<RefreshIcon />}
          onClick={onClickRefresh}
        />
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
      </BottomNavigation>
    </Paper>
  );
}
