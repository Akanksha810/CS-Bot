import React, {useState} from 'react';
import axios from 'axios';

class InputPortal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            payloadBox : '',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]:event.target.value
        });
      }
    
    sendRequest(payload) {
        axios.get("http://localhost:5000/")
        .then(response=> console.log(response))
    }

    onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            payloadBox: this.state.payloadBox
        }
        console.log(payload.payloadBox)
        this.setState({
            payloadBox: ''
        })
    }
     
    render() {
        return (
            <div class="text-area" method="POST">
                <label>
                    <div className="textarea-label">Enter your Text here  &#11167;</div>
                </label>
                <form id="text-input" >
                <div className = "textarea-item">
                    <textarea 
                        rows="16" 
                        name="payloadBox"
                        value = {this.state.payloadBox}
                        placeholder="Jot down anything, or copy any text from anywhere."
                        onChange={event => this.handleChange(event)}
                        cols="100">
                    </textarea>
                </div>
                <div>
                    <button className = "button">
                    <span className="button-text" onClick={(e) => this.onSubmit(e)}>Click to Proceed &#10148;</span>
                    </button>
                </div>
                </form>
            </div>


        );

    }
}

export default InputPortal;