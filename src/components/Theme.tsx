import React, { PropsWithChildren } from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import "fontsource-roboto";

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    mode: "dark",
  },
});

export function Theme({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
