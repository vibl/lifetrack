import React, { FC } from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import "fontsource-roboto";

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    type: "dark",
  },
});

const Theme: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
