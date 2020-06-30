import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';
import Ferris from "./views/Ferris/Ferris";
import Birthday20200703 from "./views/Birthday/Birthday20200703";

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
            <Route exact path="/Birthday20200703" component={Birthday20200703}/>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
