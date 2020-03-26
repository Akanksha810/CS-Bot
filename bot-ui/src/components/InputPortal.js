import React, {useState, useEffect} from 'react';

import{ Redirect, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// http://localhost:3000/takeinput/portal
const BASE_URL ="http://localhost:5010/"
class InputPortal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            payloadBox : '',
            redirect : false,
            
        };
        
    }
    handleSubmit = (user) => {
        // saveUser(user).then(()=> this.setState(()=> ({
        //     redirect:true
        // })))
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
        // console.log(dat
  

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
        if(this.state.redirect === true) {
            return <Redirect to='/endpage'/>
        }

        return (
            <div className= "home-container">
            <Header/>
            <div class="text-area">
                <label>
                    <div className="textarea-label">Enter your Text here  &#11167;</div>
                </label>
                {console.log(window.location.pathname)}
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
                    <Link to="/takeinput/re">
                    <button className = "button" onClick={this.handleSubmit}>
                    {/* <span className="button-text" onClick={(e) => this.onSubmit(e)}>Summarize 'n' Classify&#10148;</span>    */}
                    <span className="button-text" >Summarize 'n' Classify&#10148;</span>
                    </button>
                    </Link>
                </div>
                {this.renderRedirect}
            </div>
            <Footer/>
            </div>
        );

    }
}



export default InputPortal;