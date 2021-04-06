import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";

import Airline from "./Airline";
import Airlines from "./Airlines";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
    </>
  );
};

export default App;
