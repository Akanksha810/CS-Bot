import React from 'react';
import Footer from "../components/Footer";
import ControlIris from "../components/bots/ControlIris";
import ControlCoral from '../components/bots/ControlCoral';
import ControlAzul from '../components/bots/ControlAzul';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import InputPortal from '../components/InputPortal';
import ControlRoux from '../components/bots/ControlRoux';
import ResultPortal from '../components/ResultPortal';
import SpiderViewPortal from '../components/SpiderViewPortal';


class HomeContainer extends React.Component {
  render() {
      return (
        <div className = "home-container">
          <div className = "page-info">
            <div className = "page-header-title-container">
              <div className = "home-container.page-info.page-header-title-container.page-header-title">
                CS-BOTS 1.0
              </div>
            </div>
            <div className = "page-subtitle-container">
              <div className = "page-subtitle">
                A Bot-System for Summarization and Classification of Textual Data
              </div>
            </div>
          </div>
          <Router>
            <div className = "main-bot">
              <Switch>
                <Route exact path='/' component={ControlIris}></Route>
                <Route exact path='/about' component={ControlIris}></Route>
                <Route exact path='/typeinput' component={ControlCoral}></Route>
                
                <Route exact path="/takeinput" component={ControlAzul}/>
                <Route exact path="/takeinput/portal" component={InputPortal}/>
                
                <Route exact path="/results" component={ControlRoux}/>
                <Route exact path="/results/portal" component={ResultPortal}/>
                <Route exact path="/results/portal/spiderView" component = {SpiderViewPortal}/>
              </Switch>

            </div>
          </Router>
          <div className = "footer-content">
              <Footer 
                text = "©	This is a joint project by Aditya and Akanksha"
              />
          </div>
        </div>
      )
    }
}

export default HomeContainer
