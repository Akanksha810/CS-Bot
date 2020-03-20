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
              {this.props.text}
            </div>
         </footer>

        )
    }
}

export default Footer;