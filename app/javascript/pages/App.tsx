import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";

import AirlinePage from "./AirlinePage";
import AirlinesPage from "./Airlines";

const App: React.FC = () => {
  return (
    <Stack minW="100%" h="100vh" p={0} m={0} spacing={0}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AirlinesPage} />
        <Route exact path="/airlines/:slug" component={AirlinePage} />
      </Switch>
    </Stack>
  );
};

export default App;
