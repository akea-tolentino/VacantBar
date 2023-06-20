import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import BarIndex from "./components/BarIndex/BarIndex";
import BarShow from "./components/BarShow/BarShow";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path={`/bars/:id`}
            component={BarShow} />
          <Route exact path='/'
            component={BarIndex} />
        </Switch>
    </>
  );
}

export default App;
