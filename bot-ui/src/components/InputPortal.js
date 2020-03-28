import React from 'react';

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

            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount() {
        this.sendRequest()
    }

    handleChange(event) {
        this.setState({payloadBox:event.target.value});
    }

    handleSubmit(event) {
        this.sendRequest()
        this.setState({redirect:true})
        event.preventDefault();
    }

    async sendRequest() {
        var res = await fetch(BASE_URL + 'convert', {
            method:'POST',
            body: this.state.payloadBox,
            headers:{
                'Content-Type' : 'text/plain'
            }
        }).then (response => {
            return response.json();
        })
        
    }
     
    render() {
        
        return (
            <div className= "home-container">
                <Header/>
                <div className="text-area">
                    <label>
                        <div className="textarea-label">Enter your Text here &#11167;</div>
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
                        <input className = "button" type="submit" value="Submit Input" />
                        <Link to="/takeinput/re">
                            <button className="button" disabled={!this.state.redirect}>
                                Redirect to Azul &#10148;
                            </button>  
                        </Link>
                    </div>
                    
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}



export default InputPortal;