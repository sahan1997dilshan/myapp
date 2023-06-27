import logo from './logo.svg';
import './App.css'
import React, { Component } from 'react';

class App extends Component {

 constructor(props) {
  super(props);
  

  this.state={
    apiMassage:''
  }
 }

 callApi(){
  fetch("http://localhost:9000/text")
       .then(res=>res.text())
       .then(res=>this.setState({apiMassage:res}));
       
 }

 componentWillUnmount(){
  this.callApi();
 }
 

  render() {
    return (
      <div className='App'>
       <p>name{this.state.apiMassage}</p>
      </div>
    );
  }
}

export default App;