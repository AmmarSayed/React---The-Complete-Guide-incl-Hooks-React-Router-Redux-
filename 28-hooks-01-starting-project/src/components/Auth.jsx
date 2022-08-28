import React from "react";
import Card from "./UI/Card";
import "./Auth.css";
import { useContext } from "react";
import { AuthContext } from "../components/context/auth-context";

const Auth = (props) => {
  const loginCxt = useContext(AuthContext);

  const loginHandler = () => {
    loginCxt.login();
  };
  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
