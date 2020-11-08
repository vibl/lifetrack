import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "data/graphql";
import { RecoilRoot } from "recoil";
import Theme from "./Theme";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Theme>
          <ApolloProvider client={client}>
            <RecoilRoot>
              <Router />
            </RecoilRoot>
          </ApolloProvider>
        </Theme>
      </React.StrictMode>
    </div>
  );
}

export default App;
