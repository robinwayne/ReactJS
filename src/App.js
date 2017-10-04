import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//INHERET FROM COMPONENT
class App extends Component {

constructor(props) {
	super(props);
	this.state={
		title:'MyValue',
		count:0,
	};
	this.handleMouseHover=this.handleMouseHover.bind(this);
}	

  handleMouseHover(){
  	this.setState({count:this.state.count+1});
  }

  render() {

    return (
		<div onClick={this.handleMouseHover}>
		<h1> Hello React {this.state.title} </h1>
		<h2> Count <span className="badge">{this.state.count}</span></h2> 
		<h2>{this.props.testValue} - {this.props.testValue2}</h2>
		</div>

      
      
    ); }
}

export default App;
