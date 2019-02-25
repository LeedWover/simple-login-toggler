import React, { Component } from 'react';
import './App.css';
//import UserIsLoggedIn from './components/UserIsLoggedIn/UserIsLoggedIn';

class App extends Component {
  state = {
    isLoggedIn: false
  }

  loginToggler = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
      
    })
    console.log(this.state.isLoggedIn)
  }
  
  render() {
    return (
      <div>
        
        {this.state.isLoggedIn ? <button onClick={this.loginToggler}>Logout</button> : <button onClick={this.loginToggler}>Login</button> }
      </div>
    );
  }
}

export default App;
