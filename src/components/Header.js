import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
      <h1>Expense Manager</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>     {/*activeClassName is only going to get applied to the link when we're on that page. */}
      <NavLink to="/create" activeClassName="is-active" exact={true}>Add Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </header>
)

export default Header;