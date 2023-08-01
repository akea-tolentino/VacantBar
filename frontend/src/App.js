import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
// import BarIndex from "./components/BarIndex/BarIndex";
import BarShow from "./components/BarShow/BarShow";
import Navigation from "./components/Navigation";
import { Wrapper } from "@googlemaps/react-wrapper";
import Home from "./components/Home/Home";
import SearchIndex from "./components/Search/SearchIndex";

const apiKey = process.env.REACT_APP_GMAPS_API_SERVER_KEY;

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Wrapper apiKey={apiKey}>
            <Route path="/bars/:barId">
              <BarShow />
            </Route>
            {/* <Route path="/bars/:barId"
              component={BarShow} /> */}
          </Wrapper>
          <Route path="/search/bars">
            <SearchIndex />
          </Route>
        </Switch>
    </>
  );
}

export default App;
