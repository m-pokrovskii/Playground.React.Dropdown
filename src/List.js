import React, { Component } from 'react'
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
        <ul className="SList">
          { this.props.items.map( (v,k) => 
            <ListItem updateValue={this.props.updateValue} key={k} item={v} />
          ) }
        </ul>
    )
  }
}
