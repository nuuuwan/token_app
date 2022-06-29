import React, { Component } from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CryptoKeysPage from "./view/pages/CryptoKeysPage.js";

const THEME = createTheme({
  palette: {
    primary: {
      main: "#444",
    },
    secondary: {
      main: "#888",
    },
  },
  typography: {
    fontFamily: ["Cambay", "Cabin", "sans-serif"].join(","),
    fontSize: 13,
  },
});

const STYLE = {
  width: 400,
  maxWidth: "90%",
  margin: "auto",
  marginTop: 5,
  marginBottom: 5,
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Box sx={STYLE}>
          <CryptoKeysPage />
        </Box>
      </ThemeProvider>
    );
  }
}
