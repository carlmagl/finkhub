import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

export const AuthRoute = ({ auth, children }) => {
  const history = useHistory();
  const [user] = useAuthState(auth);
  if (user && history.location.pathname !== "/") {
    history.push("/");
  }
  if (!user && history.location.pathname !== "/login") {
    history.push("/login");
  }
  return <>{children}</>;
};
