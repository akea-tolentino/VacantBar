import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
    <>
      <h1>Welcome to VacantBar</h1>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
