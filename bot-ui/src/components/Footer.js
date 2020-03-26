import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super()
    this.state = {
    }
  }
    render() {
        return (
          <footer className = "main-footer">
            <div className = "footer-text">
              ©	This is a joint project by Aditya and Akanksha
            </div>
         </footer>

        )
    }
}

export default Footer;