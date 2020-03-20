import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/fonts/autodestructbb_reg.ttf';
import './styles/fonts/pizzabot.ttf';
import './styles/fonts/PIMPBOT5.ttf';
import './styles/fonts/futura/futura medium bt.ttf'; 

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
