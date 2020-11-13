import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "data/graphql/config";
import { RecoilRoot } from "recoil";
import { LocalizationProvider } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { Theme } from "./Theme";
import { Router } from "./Router";

export function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Theme>
          <LocalizationProvider dateAdapter={DateFnsUtils}>
            <ApolloProvider client={client}>
              <RecoilRoot>
                <Router />
              </RecoilRoot>
            </ApolloProvider>
          </LocalizationProvider>
        </Theme>
      </React.StrictMode>
    </div>
  );
}
