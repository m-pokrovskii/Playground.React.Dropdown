import React, { Component } from 'react'

export default class Input extends Component {
  render() {    
    return (
      <div>
        <input
          value = {this.props.value}
          onChange={this.props.onChange} 
          placeholder="Search..." 
          className="SField" 
        />
      </div>
    )
  }
}