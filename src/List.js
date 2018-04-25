import React, { Component } from 'react'
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
        <ul className="SList">
          { this.props.items.map( (v,k) => 
            <ListItem onClick={this.props.onClick} key={k} item={v} />
          ) }
        </ul>
    )
  }
}
