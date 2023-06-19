import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import BarIndex from "./components/BarIndex/BarIndex";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <BarIndex/>
        <Switch>

        </Switch>
    </>
  );
}

export default App;
