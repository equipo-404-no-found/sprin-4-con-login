import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "../backend/estilos.css";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>;

};