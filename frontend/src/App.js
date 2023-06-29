import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import BarIndex from "./components/BarIndex/BarIndex";
import BarShow from "./components/BarShow/BarShow";
import Navigation from "./components/Navigation";
import { Wrapper } from "@googlemaps/react-wrapper";
import Footer from "./components/Footer/Footer";

const apiKey = process.env.REACT_APP_GMAPS_API_SERVER_KEY;

function App() {
  return (
    <>
      <Navigation />
        <Switch>
        <Route exact path='/'
            component={BarIndex} />
        <Wrapper apiKey={apiKey}>
          <Route path={`/bars/:barId`}
            component={BarShow} />
        </Wrapper>
          
        </Switch>
      <Footer />
    </>
  );
}

export default App;
