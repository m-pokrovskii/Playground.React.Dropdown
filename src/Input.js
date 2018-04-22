import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
       inputValue: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      inputValue: nextProps.inputValue
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    this.props.handleInputChange(e);
  }


  render() {    
    return (
      <div>
        <input
          value = {this.state.inputValue}
          onChange={this.handleInputChange.bind(this)} 
          placeholder="Search..." 
          className="SField" 
        />
      </div>
    )
  }
}