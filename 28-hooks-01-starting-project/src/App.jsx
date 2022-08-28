import React from "react";
import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./components/context/auth-context";
import { useContext } from "react";
const App = (props) => {
  const loginCxt = useContext(AuthContext);
  let content = <Auth />;
  if (loginCxt.isAuth) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
