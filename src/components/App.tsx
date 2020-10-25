import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "data/graphql";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";
import Theme from "./Theme";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Theme>
          <ApolloProvider client={client}>
            <Router>
              <RecoilRoot>
                <Routes />
              </RecoilRoot>
            </Router>
          </ApolloProvider>
        </Theme>
      </React.StrictMode>
    </div>
  );
}

export default App;
