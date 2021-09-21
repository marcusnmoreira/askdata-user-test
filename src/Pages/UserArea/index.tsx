import React from "react";
import Sidebar from "../../components/Sidebar";
import Configuracoes from "../Configuracoes";
import MeusTimes from "../MeusTimes";
import Visao360 from "../Visao360";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const UserArea: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/userarea/meustimes" component={MeusTimes} />
        <Route path="/userarea/visao360" component={Visao360} />
        <Route path="/userarea/configuracoes" component={Configuracoes} />
      </Switch>
    </Router>
  );
};

export default UserArea;
