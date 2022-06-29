import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BugReportIcon from "@mui/icons-material/BugReport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import SettingsIcon from "@mui/icons-material/Settings";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

const URL_GOOGLE_DOC_HELP =
  "https://docs.google.com/document" +
  "/d/1poEUfKJYhf_x07zbJfiqch7jHXhWJVz5RLGsj0ULHQ0";

const MENU_ITEM_LIST = [
  {
    name: "Help (Google Doc)",
    url: URL_GOOGLE_DOC_HELP,
    Icon: GoogleIcon,
  },
  {
    name: "Code Repository",
    url: "http://github.com/nuuuwan/token_app",
    Icon: GitHubIcon,
  },
  {
    name: "Report Bugs",
    url: "https://github.com/nuuuwan/token_app/issues",
    Icon: BugReportIcon,
  },
];

export default function HelpMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  const onClickCopy = function () {
    navigator.clipboard.writeText(URLContext.getURL());
  };

  const onClickClearCache = function () {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <div>
      <IconButton onClick={onClick}>
        <SettingsIcon sx={{ color: "lightgray" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {MENU_ITEM_LIST.map(function (menuItem, i) {
          const key = "app-bar-menu-item-" + i;
          const Icon = menuItem.Icon;
          const onClick = function (e) {
            window.open(menuItem.url, "_blank");
            onClose();
          };

          return (
            <MenuItem key={key} onClick={onClick}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{t(menuItem.name)}</ListItemText>
            </MenuItem>
          );
        })}
        <MenuItem onClick={onClickCopy}>
          <ListItemIcon>
            <ContentCopyIcon />
          </ListItemIcon>
          <ListItemText>{t("Copy App Link")}</ListItemText>
        </MenuItem>
        <MenuItem onClick={onClickClearCache}>
          <ListItemIcon>
            <AutorenewIcon />
          </ListItemIcon>
          <ListItemText>{t("Clear Local Cache")}</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}