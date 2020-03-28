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
      summary : null,
      matrix : null,
      category : null,
    }
  }
  
  componentDidMount() {
    fetch(BASE_URL + "summary")
    .then(response => response.json())
    .then(data => {this.getSummary(data)})
    fetch(BASE_URL + "classification")
    .then(response => response.json())
    .then(data => {this.getMatrix(data)})
    
  }
  getSummary(value) {
    this.setState({summary:value["summary"]})
   
  }
  getMatrix(value) {
    this.setState({matrix:value,category:Object.keys(value)[0]})
  }
  // getMatrixCategories() {
  //   this.setState({categories : ["Science", "Home", "Recreation", "Computers","Health", "Society", "Business", "Games", "Arts", "Sports"]}) 
    
  // }

  // getMatrixValues() {
  //   var prob_values = []
  //   const temp = this.state.matrix
  //   var categories = ["Science", "Home", "Recreation", "Computers","Health", "Society", "Business", "Games", "Arts", "Sports"]
  //   categories.map((c)=> {prob_values.push(temp[c])})
  //   this.setState({values : prob_values})
  // }

  render() {
    
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
                  rows = "10"
                  cols = "120"
                  name = "text"
                  value = {this.state.summary}
                  placeholder = "Please wait while the Roux caters this page for you ! ♡"                
                >

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
                  <div className = "category">{this.state.category}</div>
                </div>
                  <div className="spider-graph" >
                    <SpiderViewPortal matrix={this.state.matrix}/>
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