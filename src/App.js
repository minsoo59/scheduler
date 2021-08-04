import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Change_Pw from "./routes/Change_Pw";

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
