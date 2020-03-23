import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {fun} from './Helper';
import{ Redirect } from 'react-router-dom';
import history from './history';


const BASE_URL ="http://localhost:5010/"
class InputPortal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            payloadBox : '',
            redirect : null,
            
        };
        this.handleChange = this.handleChange.bind(this)
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    renderRedirect = () => {
        this.setRedirect()
        if (this.state.redirect) {
            return <Redirect push to="/takeinput/re" />
        }
    }
    
    
    handleChange(event) {
        this.setState({
          [event.target.name]:event.target.value
        });
      }
   
    sendRequest(payload) {
        console.log("Request length " + payload.length)
        var res = fetch('http://localhost:5010/summarize', {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type' : 'text/plain'
            }
        }).then(res => {
            return res;
        }).catch(err=> err);
        console.log(res)
    }

    fun(data) {
        console.log(data)
    }

    onSubmit = (event) => {
        this.renderRedirect()
        // event.preventDefault()
        // const payloadBox = {
        //     payload: this.state.payloadBox
        // }
        // console.log(payloadBox.payload)
        // this.sendRequest(payloadBox.payload)
        // this.setState({
        //     payloadBox: ''
        // })
        
    }
     
    render() {
        

        return (
            <div class="text-area">
                <label>
                    <div className="textarea-label">Enter your Text here  &#11167;</div>
                </label>
                
                <div className = "textarea-item">
                    <textarea 
                        className="textarea-cl"
                        rows="16" 
                        name="payloadBox"
                        value = {this.state.payloadBox}
                        placeholder="Jot down anything, or copy any text from anywhere. (Please write min. 100 words)"
                        onChange={event => this.handleChange(event)}
                        cols="100">
                    </textarea>
                </div>
                <div>
                    <button className = "button" onClick={() => history.push('/takeinput/init')}>
                    {/* <span className="button-text" onClick={(e) => this.onSubmit(e)}>Summarize 'n' Classify&#10148;</span>    */}
                    <span className="button-text" >Summarize 'n' Classify&#10148;</span>
                    </button>
                </div>
                
            </div>
            
        );

    }
}



export default InputPortal;