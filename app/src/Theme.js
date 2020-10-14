import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    almostBlack: "#1E2337",
    grey: "#636674",
  },
  fonts: ["DM Sans", "sans-serif"],
  fontSizes: {
    small: "12.25px",
    medium: "15.75px",
  },
  spaces: {
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
