import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';
import Beibi from "./views/Jojo/Beibi";
import Birthday20200703 from "./views/Birthday/Birthday20200703";
import Nova1 from './views/Nova/Nova1';

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
      <BrowserRouter history={history}>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Beibi/>}/>
            <Route exact path="/beibi" element={<Beibi/>}/>
            <Route exact path="/Birthday20200703" element={<Birthday20200703/>}/>
            <Route exact path="/Nova/1" element={<Nova1/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
