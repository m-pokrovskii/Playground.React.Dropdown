import React, { Component } from 'react'

export default class ListItem extends Component {

  handleClick(e) {
    e.preventDefault();
    this.selectItem(this.props.item);
  }

  selectItem(item) {
    console.log(item);
  }

  render() {
    return (
      <li >{this.props.item.label}</li>
    )
  }
}
