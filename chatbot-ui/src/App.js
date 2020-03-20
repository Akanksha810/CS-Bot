import React from 'react';

import './App.css';

import HomeContainer from './containers/HomeContainer';

class App extends React.Component {
  componentDidMount() {
    document.title = "CS-Bots";
  }
  
 render() {
    return (
      <div className="App">
        <HomeContainer/>
        {/* <InputContainer/> */}
      </div>
    )
 }
}



export default (App);
