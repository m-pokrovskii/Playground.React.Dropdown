import React, { Component } from 'react'

export default class ListItem extends Component {

  handleClick(e) {
    e.preventDefault();
    this.selectItem(this.props.item);
  }

  selectItem() {
    const item = this.props.item;
    this.props.updateValue(item);
  }

  render() {
    return (
      <li onClick={this.selectItem.bind(this)} >{this.props.item.label}</li>
    )
  }
}
