import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "data/graphql/config";
import { RecoilRoot } from "recoil";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Theme from "./Theme";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Theme>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ApolloProvider client={client}>
              <RecoilRoot>
                <Router />
              </RecoilRoot>
            </ApolloProvider>
          </MuiPickersUtilsProvider>
        </Theme>
      </React.StrictMode>
    </div>
  );
}

export default App;
