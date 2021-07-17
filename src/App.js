import React from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";

//LAOUTS
import MainLayouts from "./Layouts/MainLayouts";
import HomepageLayouts from "./Layouts/HomepageLayout";

//PAGES
import Homepage from "./Pages/Homepages";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayouts>
              <Homepage />
            </HomepageLayouts>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayouts>
              <Registration />
            </MainLayouts>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
