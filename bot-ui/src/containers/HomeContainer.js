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
import Header from '../components/Header';
import history from '../components/history';

// {() => <PropsPage title={`Props through component`} />}
class HomeContainer extends React.Component {
  render() {
      return (
        <div className = "home-container">
          <Header/>
          <Router history={history}>
            <div className = "main-bot">
              <Switch>
                <Route exact path='/' component={ControlIris}></Route>
                <Route exact path='/about' component={ControlIris}></Route>
                <Route exact path='/typeinput' component={ControlCoral}></Route>
                
                <Route exact path="/takeinput/init" component={() => <ControlAzul interface="init"/>}/>
                <Route exact path="/takeinput/re" component={() => <ControlAzul interface="re"/>}/>
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
