import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import{ Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: 'into-message-1',
    message : 'Control Transfer Successful ',
    trigger: 'intro-message-2',
    delay: 10000,
  },
  {
    id: 'intro-message-2',
    message: 'Starting Bot Interface..',
    trigger: 'intro-message-3',
  },
  {
    id: 'intro-message-3',
    message: 'Hello! I am CS-Bot-FF7F50 CodeName Coral!',
    trigger: 'intro-message-4',
  },
  {
    id : 'intro-message-4',
    message: 'My job as Bot-FF7F50 is to make you aware of options of varying inputs which could be put here.',
    trigger: 'options-1',  
  },
  {
    id:'options-1',
    message: 'Input Options available : ',
    trigger : 'options-2'
  },
  {
    id : 'options-2',
    options: [
      { value: 1, label: 'Raw Text', trigger: 'options-3' },
    ],
  },
  {
    id: 'options-3',
    message: 'Input Type Selection Registered as \'Raw Text\'.',
    trigger: 'options-4',
  },
  {
    id: 'options-4',
    message: 'Press OK to continue or ⇪ to go back to options.',
    trigger: 'options-5',
  },
  {
    id: 'options-5',
    options: [
      { value: 1, label: 'OK', trigger: 'input-validator' },
      {value : 2, label: '⇪', trigger: 'options-1'},
    ],
  },
  {
    id: 'input-validator',
    message: 'Handing over control to Azul...',
    trigger: "control-transfer",
  },
  {
    id: 'control-transfer',
    message: " ",
    end: true
  }
]
    
class ControlCoral extends React.Component {
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
      return <Redirect to='/takeinput/init' />
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
                    headerTitle="Server - Coral"
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

export default ControlCoral;