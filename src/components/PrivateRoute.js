import { Route, Redirect } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const Component = props.component
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          //if token is in localStorage, render the given component
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
