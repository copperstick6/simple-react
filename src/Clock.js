import React, { Component } from 'react';
import Calculator from './Calculator';

export default class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date(), isToggleOn:true, value: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //this is for setting up the timer whenever the clock is rendered
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  //this is for doing something whenever the DOM providing the clock is removed.
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  handleSubmit(event){
    if (String(this.state.value).length > 0){
      alert('A new name was submitted: ' + this.state.value);
    }
    else{
      alert('String was too short!')
    }
    event.preventDefault();
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render(){
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'It is On brother' : 'It is Off brother'}
        </button>
        <p></p>
        <form onSubmit = {this.handleSubmit}>
          <label>
          Name:
          <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
          </label>
        </form>
        <p><br></br></p>
        <Calculator/>
      </div>
    );
  }
}
