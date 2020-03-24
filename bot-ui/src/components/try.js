import React from 'react'
import ChatBot from 'react-simple-chatbot';
import{ Redirect } from 'react-router-dom';








class ControlIris extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect : null,
    }
  }

  setRedirect = (path) => {
    this.setState({
      redirect: path
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to= {this.state.redirect}/>
    }
  }
  
}















































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ChatBot from 'react-simple-chatbot';

// class Review extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//     };
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name} = steps;

//     this.setState({ name });
//   }

//   render() {
//     const { name } = this.state;
//     console.log(this.state.name)
//     return (
//       <div style={{ width: '100%' }}>
//         <h3>Summary</h3>
//         <table>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>{name.value}</td>
//             </tr>
           
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

// class SimpleForm extends Component {
//   render() {
//     return (
      
//       <div>
//       <ChatBot
//         steps={[
//           {
//             id: '1',
//             message: 'What is your name?',
//             trigger: 'name',
//           },
//           {
//             id: 'name',
//             user: true,
//             trigger: '3',
//           },
         
//           {
//             id: '3',
//             message: 'Great! Check out your summary',
//             trigger: 'review',
//           },
//           {
//             id: 'review',
//             component: <Review />,
//             asMessage: true,
//             trigger: 'end-message',
//           },        
//           {
//             id: 'end-message',
//             message: 'Thanks! Your data was submitted successfully!',
//             end: true,
//           },
//         ]}
//       />
      
//       </div>


//     );
//   }
// }

// export default SimpleForm;