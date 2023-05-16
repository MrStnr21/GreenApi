import { FC } from "react";
import { Location, Navigate, useLocation } from "react-router-dom";

import { routesUrl } from "../components/utils/routes-data";

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({ children, notAuth = false }) => {
  const location: Location = useLocation();
  const token = localStorage.getItem("token");

  const from: string = location.state?.from || "/";

  if (token && notAuth) {
    return <Navigate to={from} />;
  }

  if (!token && !notAuth) {
    return <Navigate to={routesUrl.loginPage} state={{ from: location }} />;
  }

  return children;
};

export { ProtectedRoute };
