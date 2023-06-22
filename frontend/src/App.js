import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import BarIndex from "./components/BarIndex/BarIndex";
import BarShow from "./components/BarShow/BarShow";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      {/* <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GMAPS_API_BROWSER_KEY}`} defer></script> */}
      <Navigation />
        <Switch>
          <Route path={`/bars/:barId`}
            component={BarShow} />
          <Route exact path='/'
            component={BarIndex} />
        </Switch>
    </>
  );
}

export default App;
