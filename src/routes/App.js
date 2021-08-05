import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Join from "../components/Join";
import Change_Pw from "../components/Change_Pw";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/change_pw" component={Change_Pw} />
    </HashRouter>
  );
}

export default App;
