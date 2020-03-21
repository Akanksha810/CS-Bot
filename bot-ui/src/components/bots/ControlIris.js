import React from 'react'
import ChatBot from 'react-simple-chatbot';
import{ Redirect } from 'react-router-dom';
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
      return <Redirect to='/typeinput' />
    }
  }
  render() {
      return (
        <div>
          <ChatBot
            handleEnd={this.setRedirect}
            customDelay = '1600'
            headerTitle="Server: Iris"
            speechSynthesis = {{ enable: true, lang: 'en' }}
            steps = {[
              {
                id: 'intro-message-1',
                message : 'Hello! I am CS-Bot-6E48AA CodeName Iris!',
                trigger: 'intro-message-2',
              },  
              {
                id: 'intro-message-2',
                message: 'My job as Bot-6E48AA is to introduce you to this software.'
              },
              {
                id: 'intro-message-2',
                message: 'May I know your name please ?',
                trigger: 'username-entry',
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
              },
              {
                id: 'disclaimer-1',
                message: "This is to inform you that this SOFTWARE is in alpha phase and is made solely for educational purposes. Please don't try to tamper or induce m-code in any manner.",
                trigger: 'disclaimer-2',
              },
              {
                id: 'disclaimer-2',
                trigger:'disclaimer-3',
                message: "Hope you enjoy this software.",
              },
              {
                id: 'disclaimer-3',
                trigger:'disclaimer-options-1',
                message: "Best Regards, Devs.",
              },
              {
                id: 'disclaimer-options-1',
                trigger: 'disclaimer-options-2',
                message: 'Do you agree to proceed ?',
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
                end: true 
              },
              {
                id: 'disagreement-path-1',
                message: 'Hope you have a great day !\nDo you want to a RE-RUN or EXIT this app?',
                trigger: 'disagreement-path-2'
              },
              {
                id: 'disagreement-path-2',
                options : [
                  { value: 1, label: 'RE-RUN', trigger: 'intro-message-1' },
                  { value: 2, label: 'EXIT', trigger:'end-path' },
                ]
              },
              {
                id: 'end-path',
                message: 'Bubbie!',
                end:true,
              },
              
            ]}
          />
         {this.renderRedirect()}
        </div>
      )
  }
}

export default ControlIris;