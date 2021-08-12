import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import App from './App';
import About from './Pages/about';
import Form from './Pages/form';
import NotFound from './Pages/notFound';

const Routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/form" component={Form} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
ReactDOM.render(
  Routing,
  document.getElementById('root')
);


reportWebVitals();
