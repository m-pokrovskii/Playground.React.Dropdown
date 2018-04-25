import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <li onClick={() => this.props.onClick(this.props.item.label)} >{this.props.item.label}</li>
    )
  }
}
