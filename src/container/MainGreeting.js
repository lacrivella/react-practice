import React, { Component } from 'react';
import Form from '../components/Form';
import Display from '../components/Display';
import PropTypes from 'prop-types';


export default class MainGreeting extends Component {
  state = {
    text: '',
    submitted: ''
  };

  //dynamically changes
  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  //changes when you hit button
  handleSubmit = event => {
    event.preventDefault();
    let current = this.state.submitted;
    current += `${this.state.text} \n`;
    this.setState({ submitted: current });
  } 
 
  render() {
    return (
      <section>
        <Form text={this.state.text} handleSubmit={this.handleSubmit} handleTextChange={this.handleTextChange} /> 
        <Display textInput={this.state.submitted}/>
      </section>
    );
  }
}
