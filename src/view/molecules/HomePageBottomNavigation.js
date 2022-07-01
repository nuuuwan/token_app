import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

import { t } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import AppColors from "../../view/_constants/AppColors";
import PAGE_CONFIG_LIST from "../../view/pages/PAGE_CONFIG_LIST";

export default function HomePageBottomNavigation({ onClickOpenPage }) {
  const context = URLContext.getContext();
  const activePage = context.page;
  const isAdminMode = context.mode === "issuer";
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        {PAGE_CONFIG_LIST.slice(0, 4).map(function (config) {
          const key = "button-" + config.page;
          if (config.showInOnlyAdminMode && !isAdminMode) {
            return null;
          }
          const isActive = config.page === activePage;

          const color = isActive
            ? config.showInOnlyAdminMode
              ? AppColors.Issuer
              : AppColors.Receiver
            : AppColors.Light;

          return (
            <Tooltip key={key} title={t(config.label)}>
              <BottomNavigationAction
                icon={<config.Icon sx={{ color }} />}
                onClick={() => onClickOpenPage(config.page)}
              />
            </Tooltip>
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
