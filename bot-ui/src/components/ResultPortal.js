import React from 'react';
import SpiderViewPortal from './SpiderViewPortal';
import Header from './Header';
import Footer from './Footer';
import {Link} from "react-router-dom";

const BASE_URL ="http://localhost:5010/"
class ResultPortal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  
  
  componentDidMount() {
    fetch(BASE_URL + "summary")
    .then(response => response.json())
    .then(data => console.log(data))
    
  
  }





  render() {
    // console.log(this.state.summary)
    // console.log(this.state.matrix)
    
    // console.log(this.state)
    return (
      <div className= "home-container">
        <Header/>
        <div className = "result-portal">
          <div className = "summarize-div">
              <div className = "textarea-title">
                <span className = "text-title">
                  PROCESSED SUMMARY 
                </span>
              </div>
              <div className = "textarea-box">
                <textarea 
                  rows="14" 
                  cols="120"
                >
                  {}
                </textarea>
              </div>
              <div className = "button-div">
                <Link to="/takeinput/init">
                <div className = "button-left">
                  <button className = "button-save">Click for Another Processing</button>
                </div>
                </Link>
                <div className = "button-right">
                  <button className = "button-save">Save Result to File</button>
                </div>
                <Link to="/end">
                <div className = "button-left">
                  <button className = "button-save">Exit</button>
                </div>
                </Link>
              </div>
              <div className = "category-area">
                <div className = "category-result">
                  <div className = "category-title">Category : </div>
                  <div className = "category">Entertainment</div>
                </div>
                  <div className="spider-graph" >
                    <SpiderViewPortal/>
                  </div>
              </div>            
          </div>
        </div>
        <Footer/>
      </div>

        )
    }
}

export default ResultPortal;