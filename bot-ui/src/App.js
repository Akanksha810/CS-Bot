import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ControlIris from "./components/bots/ControlIris";
import ControlCoral from './components/bots/ControlCoral';
import ControlAzul from './components/bots/ControlAzul';
import ControlRoux from './components/bots/ControlRoux';

import InputPortal from './components/InputPortal';
import ResultPortal from './components/ResultPortal';
import SpiderViewPortal from './components/SpiderViewPortal';

import EndPage from './components/EndPage';

class App extends React.Component {
  componentDidMount() {
    document.title = "CS-Bots";
  }
  
 render() {
    return (
      <div className="App">
        <Router >
          <div >
                <Route exact path='/' component={ControlIris}></Route>
                <Route exact path='/typeinput' component={ControlCoral}></Route>
                
                <Route exact path="/takeinput/init" component={() => <ControlAzul/>}/>
                <Route exact path="/takeinput/re" component={() => <ControlAzul/>}/>
                <Route exact path="/takeinput/portal" component={InputPortal}/>
                
                <Route exact path="/results" component={ControlRoux}/>
                <Route exact path="/results/portal" component={ResultPortal}/>
                <Route exact path="/results/portal/spiderView" component = {SpiderViewPortal}/>
                
                <Route exact path="/end" component = {EndPage}/>
          </div>
        </Router>
      </div>
    )
 }
}



export default (App);
