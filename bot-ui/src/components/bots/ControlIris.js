import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import{ Redirect } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';


class Exit extends React.Component {
  render() {
    return (
      <div>
        <a href="http://localhost:3000/end">
          <div className="link-text">Click to Exit !</div></a>
      </div>
    )
    }
}

const steps = [
  {
    id: 'intro-message-1',
    message : 'Hello! I am CS-Bot-6E48AA CodeName Iris!',
    trigger: 'intro-message-2',
    delay : 100,
  },  
  {
    id: 'intro-message-2',
    message: 'My job as Bot-6E48AA is to introduce you to this software.',
    trigger: 'intro-message-3',
    delay: 4500,
  },
  {
    id: 'intro-message-3',
    message: 'May I know your name please ?',
    trigger: 'username-entry',
    delay: 4500,
  },
  {
    id: 'username-entry',
    trigger: 'username-confirmation',
    user: true,
    placeholder: 'Please Enter Your Name',
  },
  {
    id: 'username-confirmation',
    trigger: 'disclaimer-instruction',
    message: 'Hi {previousValue}, nice to meet you!',
  
  },
  {
    id: 'disclaimer-instruction',
    trigger:'disclaimer-1',
    message: "Please read the disclaimer given below to proceed.",
    delay: 7000,
  },
  {
    id: 'disclaimer-1',
    message: "This is to inform you that this SOFTWARE is in alpha phase and is made solely for educational purposes. Please don't try to tamper or induce malicious-code in any manner.",
    trigger: 'disclaimer-2',
    delay: 3700,
  },
  {
    id: 'disclaimer-2',
    trigger:'disclaimer-3',
    message: "Hope you enjoy this software.",
    delay: 10750,
  },
  {
    id: 'disclaimer-3',
    trigger:'disclaimer-options-1',
    message: "Best Regards, Devs.",
    delay:4300,

  },
  {
    id: 'disclaimer-options-1',
    trigger: 'disclaimer-options-2',
    message: 'Do you agree to proceed ?',
    delay: 3400,
  },
  {
    id: 'disclaimer-options-2',
    options: [
      { value: 1, label: 'Yes', trigger: 'agreement-path' },
      { value: 2, label: 'No', trigger: 'disagreement-path-1' },
    ],
  },
  {
    id: 'agreement-path',
    message:'This software takes various types of textual data, produces its abridged text and classifies the summary.',
    trigger:'handover1',
    
  },
  {
      id:'handover1',
      message: 'Handing over control to Coral...',
      trigger: "control-transfer",
  },
  {
    id: 'control-transfer',
    message: " ",
    delay: 6500,
    end: true 
  },
  {
    id: 'disagreement-path-1',
    message: 'Hope you have a great day !\nDo you want to a RE-RUN ?',
    trigger: 'disagreement-path-2'
  },
  {
    id: 'disagreement-path-2',
    options : [
      { value: 1, label: 'RE-RUN', trigger: 'intro-message-1' },
      { value: 2, label: 'EXIT', trigger: 'end-path' },
    ]
  },
  {
    id: 'end-path',
    component:(<Exit/>),
    trigger:'end-2',
    
  },
  {
    id:'end-2',
    message:'123',
    delay:30000,
    end:true,
  }
  
]
    
class ControlIris extends React.Component {
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
      return <Redirect to='/typeinput'/>
    }
  }
    render() {
        return (
            <div className= "home-container">
              <Header/>
              <div className="main-bot">
                <ChatBot
                  handleEnd={this.setRedirect}
                  enableSmoothScroll = 'true'
                  headerTitle="Server - Iris"
                  speechSynthesis = {{ enable: true, lang: 'en' }}
                  steps = {steps}
                />
              </div>
              <Footer/>
              {this.renderRedirect()}
            </div>
        )
    }
    
    
}

export default ControlIris;