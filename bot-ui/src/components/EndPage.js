import React from 'react'
import Footer from './Footer';
import Header from './Header';

class EndPage extends React.Component {
    
    render() {
        return (
            <div className= "home-container">
                <Header/>
               <div className= "title-text"><h1>We had fun guys, Did you ??</h1> </div>
               <div class="subtitile-text">
                   
                        <h6>If you did not, please write your suggestions on adikid1996@gmail.com and shivi.s98@gmail.com</h6>
                        <a href="shivi.s98@gmail.com"><h6></h6></a>
                       
                </div>
                <Footer/>
            </div>
        )
    }
}

export default EndPage;