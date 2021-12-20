import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "./MainWrapper";
import Home from "../Home/Home";

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/home/transactions" component={Home} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route path="/home" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
