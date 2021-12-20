import React, { Fragment } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Router from "./Router";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Fragment>
        <div>
          <Router />
        </div>
      </Fragment>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
