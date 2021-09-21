import React from "react";
import LoginPage from "./Pages/LoginPage";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserArea from "./Pages/UserArea";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/userarea" component={UserArea} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
