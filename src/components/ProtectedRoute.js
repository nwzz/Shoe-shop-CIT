import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";

const PrivateRoute = ({ children, ...rest }) => {
  const value = useGlobalContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        value.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
