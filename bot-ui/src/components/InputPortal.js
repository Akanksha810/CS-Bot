import React, {useState, useEffect} from 'react';

import{ Redirect, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const BASE_URL ="http://localhost:5010/"
class InputPortal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            payloadBox : "",
            redirect : false,
            summary_response: '',
            classify_response: null,
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        this.setState({payloadBox:event.target.value});
    }

    handleSubmit(event) {
        this.sendRequest(this.state.payloadBox)
        event.preventDefault();
    }

    async sendRequest(payload) {
        // console.log("Request length " + payload.length)
        // var res = await fetch('http://localhost:5010/classify', {
        //     method: 'POST',
        //     body: payload,
        //     headers: {
        //         'Content-Type' : 'text/plain'
        //     }
        // }).then(res => {
        //     return res;
        // }).catch(err=> err);
        var items = null;
        var res = fetch('http://localhost:5010/classify', {
            method:'POST',
            body: payload,
            headers:{
                'Content-Type' : 'text/plain'
            }
        }).then (response => {
            if (!response.ok){
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        }).then(function(data) {
            items = data;
            console.log(items)
        })
        console.log(items?items:"")
        
        // this.setState({classifiy_response: res})
        // console.log(this.state.classify_response)
    }

    onSubmit = (event) => {
        
        event.preventDefault()
        // const payloadBox = {
        //     payload: this.state.payloadBox
        // }
        // console.log(payloadBox.payload)
        // 
        // this.setState({
        //     payloadBox: ''
        // })
        
        // console.log(event.target.payloadBox)
        this.setState({payload:event.target.value})
        const payloadBox = {
            payload: this.state.payloadBox
        }
        console.log(payloadBox)

    }
     
    render() {
        if(this.state.redirect === true) {
            return <Redirect to='/endpage'/>
        }

        return (
            <div className= "home-container">
                <Header/>
                <div className="text-area">
                    <label>
                        <div className="textarea-label">Enter your Text here  &#11167;</div>
                    </label>
                    <form onSubmit={this.handleSubmit}>
                    <div className = "textarea-item">
                        <textarea 
                            className="textarea-cl"
                            rows="16" 
                            name="payloadBox"
                            value = {this.state.payloadBox}
                            placeholder = "Jot down anything, or copy any text from anywhere. (Please write min. 100 words)"
                            onChange={this.handleChange}
                            cols="100">
                        </textarea>
                    </div>
                    <div>
                        {/* <Link to="/takeinput/re"> */}
                        {/* <button className = "button" onSubmit={this.handleSubmit}>
                            <span className="button-text" ></span>
                        </button> */}
                        {/* </Link> */}
                        <input className = "button" type="submit" value="     Summarize 'n' Classify&#10148;    " />
                    </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}



export default InputPortal;