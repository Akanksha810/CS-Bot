import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import styled from 'styled-components';

class App extends React.Component {
 render() {
    return (
      <div className = "App">
        Hello World !
        <HomeContainer/>
      </div>
    )
  }
}




export default App;
