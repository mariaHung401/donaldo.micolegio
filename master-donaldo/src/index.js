import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import HistoryPage from "views/HistoryPage/HistoryPage.js";
import Philosophy from "views/HistoryPage/Philosophy.js";

import DocentePage1 from "views/ProfilePage/DocentePage1.js";
import DocentePage2 from "views/ProfilePage/DocentePage2.js";
import DocentePage3 from "views/ProfilePage/DocentePage3.js";
import DocentePage4 from "views/ProfilePage/DocentePage4.js";
import DocentePage5 from "views/ProfilePage/DocentePage5.js";
import DocentePage6 from "views/ProfilePage/DocentePage6.js";
import DocentePage7 from "views/ProfilePage/DocentePage7.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Directivos" component={DocentePage1} />
      <Route path="/Administrativo" component={DocentePage2} />
      <Route path="/Educación-Inicial" component={DocentePage3} />
      <Route path="/Educación-Primaria" component={DocentePage4} />
      <Route path="/Educación-Media-General" component={DocentePage5} />
      <Route path="/Educación-Especialistas" component={DocentePage6} />
      <Route path="/Obreros" component={DocentePage7} />

      <Route path="/Reseña-Historica" component={HistoryPage} />
      <Route path="/Filosofia" component={Philosophy} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
