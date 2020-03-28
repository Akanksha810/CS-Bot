import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import{ Redirect } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#6960EC',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6960EC',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps_entry = [
  {
    id: 'intro-message-1',
    message : 'Control Transfer Successful ',
    trigger: 'intro-message-2',
  },
  {
    id: 'intro-message-2',
    message: 'Starting Bot Interface..',
    trigger: 'intro-message-3',
    delay: 3400,
  },
  {
    id: 'intro-message-3',
    message: 'Hello! I am CS-Bot-6960EC CodeName Azul!',
    trigger: 'intro-message-4',
    delay: 4500,
  },
  {
    id:'intro-message-4',
    message: 'Redirecting to Input Portal ...  ',
    trigger : 'control-transfer',
    delay: 6500,
  },
  {
    id : 'control-transfer',
    message: ' ',
    end: true,
    delay:3500,
  },
]

const steps_exit = [
  {
    id: 'intro-message-1',
    message : 'Input Reception Successful ',
    trigger: 'intro-message-2',
    delay: 4500,
  },
  {
    id: 'intro-message-2',
    message: 'Sending Target Text to Server for processing...',
    trigger: 'intro-message-3',
    delay: 3500,
  },
  {
    id: 'intro-message-3',
    message: 'Now, Transferring Control to Roux ...',
    trigger: 'control-transfer',
    delay: 5500,
  },
  {
    id : 'control-transfer',
    message: ' ',
    end: true,
    delay: 4500,
  },
]


class ControlAzul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect : ""
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: window.location.pathname !== "/takeinput/re" ? "/takeinput/portal" : "/results"
    })
  }
  renderRedirect = () => {
    if (this.state.redirect != "") {
      return <Redirect to={this.state.redirect} />
    }
  }
    render() {
    return (
      <div className= "home-container">
        <Header/>
          <div className = "main-bot">
            <ThemeProvider theme = {theme}>
              <ChatBot
                handleEnd={this.setRedirect}
                botDelay = '1500'
                customDelay = '1600'
                enableSmoothScroll = 'true'
                headerTitle="Server - Azul"
                speechSynthesis = {{ enable: true, lang: 'en' }}
                // steps = 
                steps = {window.location.pathname !== "/takeinput/re" ? steps_entry : steps_exit}
              />
            </ThemeProvider>
          </div>
          <Footer/>
          {this.renderRedirect()}
        </div>
        )
    }
}

export default ControlAzul;