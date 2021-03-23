import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
  }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null , errorMessage: '' };
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
              this.setState({ errorMessage: err.message });
            } 
        );
      }

    render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>
      }

      return <div>Loading!</div>
    }
  }

ReactDOM.render(<App />, document.querySelector('#root'));

// import React, { Component } from 'react';
// import { render } from 'react-dom';

// if (module.hot) {
//     module.hot.accept();
//   }

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { lat: null };
//     }
        
//     componentDidMount() {
//         if (navigator.geolocation) {
//           navigator.geolocation.watchPosition(function(position) {
//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//           });
//         }
//       }
//         // navigator.geolocation.getCurrentPosition(
//         //     position => {
//         //         this.setState({ lat: position.coords.latitude });
//         //     },
            
//         //     err => console.log(err)
//         // )};
    

        
    
//     render() { 
//         return (
//         <div>
//         Latitude: {this.state.lat} 
//         </div>
//         );
//     }
// }


// render(<App />, document.getElementById('root'));