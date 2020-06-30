import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';
import Ferris from "./views/Ferris";

export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Ferris}/>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
