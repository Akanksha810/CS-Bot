import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import{ Redirect } from 'react-router-dom';
import InputPortal from '../InputPortal';
import Header from '../Header';
import Footer from '../Footer';
// #FF198C

const theme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#FF198C',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FF198C',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: 'intro-message-1',
    message : 'Control Transfer Successful ',
    trigger: 'intro-message-2',
  },
  {
    id: 'intro-message-2',
    message: 'Starting Bot Interface..',
    trigger: 'intro-message-3',
  },
  {
    id: 'intro-message-3',
    message: 'Hello! I am CS-Bot-FF198C CodeName Roux!',
    trigger: 'intro-message-4',
  },
  {
    id : 'intro-message-4',
    message: 'My job as Bot-FF198C is to display the results regarding your target texts and corresponding visualization.',
    trigger: 'intro-message-5',  
  },
  {
    id:'intro-message-5',
    message: 'Redirecting to Input Portal ...  ',
    // trigger : 'control-transfer',
    end: true,
  },
  {
    id : 'control-transfer',
    message: ' ',
    end: true,
  },
]

class ControlRoux extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect : false
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/results/portal" />
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
                  headerTitle="Server - Roux"
                  speechSynthesis = {{ enable: true, lang: 'en' }}
                  steps = {steps}
                />
              </ThemeProvider>
              </div>
              <Footer/>
              {this.renderRedirect()}
            </div>
        )
    }
}

export default ControlRoux;