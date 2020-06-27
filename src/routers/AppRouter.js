import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import DashboardPage from "../components/DashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import "normalize.css/normalize.css"
import "../styles/styles.scss"

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />      { /* <Header /> outside of <Switch /> will show up on every page */}
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact={true} />  
        <Route path="/edit/:id" component={EditExpensePage} exact={true} />     {/* id is URL parameter. id of a transaction */}
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;