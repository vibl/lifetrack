import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { client } from "data/graphql";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Router>
            <Routes />
          </Router>
        </ApolloProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
