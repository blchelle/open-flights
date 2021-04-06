// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "../pages/App";
import theme from "./theme";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChakraProvider theme={theme}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ChakraProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
