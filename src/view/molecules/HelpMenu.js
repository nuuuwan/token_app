import React, { useState } from "react";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BugReportIcon from "@mui/icons-material/BugReport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import I18N, { t, LANG_LIST } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import AppColors from "../../view/_constants/AppColors";

const MENU_ITEM_LIST = [
  {
    name: "Help (User Manual)",
    url: "https://medium.com/on-technology/the-token-app-1b24a9cceaa1",
    Icon: MenuBookIcon,
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

  const onClickIssuerMode = function () {
    let context = URLContext.getContext();
    context.mode = "issuer";
    URLContext.setContext(context);
    window.location.reload(true);
  };

  const onClickUserMode = function () {
    let context = URLContext.getContext();
    context.mode = "receiver";
    context.page = "tokenList";
    URLContext.setContext(context);
    window.location.reload(true);
  };

  const isIssuerMode = URLContext.getContext().mode === "issuer";

  return (
    <div>
      <IconButton onClick={onClick}>
        <SettingsIcon sx={{ color: "primary" }} />
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
        {LANG_LIST.map(function (lang, iLang) {
          const currentLang = I18N.getLang();
          if (currentLang === lang.lang) {
            return null;
          }

          const onClick = function () {
            let context = URLContext.getContext();
            context.lang = lang.lang;
            URLContext.setContext(context);
            window.location.reload(true);
          };

          return (
            <MenuItem key={"lang-" + iLang} onClick={onClick}>
              <ListItemIcon>
                <LanguageIcon sx={{ color: lang.color }} />
              </ListItemIcon>
              <ListItemText sx={{ color: lang.color }}>
                {lang.label}
              </ListItemText>
            </MenuItem>
          );
        })}
        <Divider />
        {isIssuerMode ? (
          <MenuItem onClick={onClickUserMode}>
            <ListItemIcon>
              <SupervisorAccountIcon sx={{ color: AppColors.Consumer }} />
            </ListItemIcon>
            <ListItemText sx={{ color: AppColors.Consumer }}>
              {t("User Mode")}
            </ListItemText>
          </MenuItem>
        ) : (
          <MenuItem onClick={onClickIssuerMode}>
            <ListItemIcon>
              <AdminPanelSettingsIcon sx={{ color: AppColors.Issuer }} />
            </ListItemIcon>
            <ListItemText sx={{ color: AppColors.Issuer }}>
              {t("Issuer Mode")}
            </ListItemText>
          </MenuItem>
        )}
        <Divider />
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
        <Divider />
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
