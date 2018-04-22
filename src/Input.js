import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleInputChange} 
          placeholder="Search..." 
          className="SField" 
        />
      </div>
    )
  }
}
