import React, { Component } from 'react';
import './App.css';
import FakeData from './fakeData';
import FuzzySearch from 'fuzzy-search';
import Input from './Input';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: FakeData,
      inputValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.searcher = this.searchInit();
  }

  searchInit() {
    return new FuzzySearch(FakeData, ['label'], {});
  }

  handleInputChange(e) {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    });
    
    if (inputValue) {
      const searchResult = this.searcher.search(inputValue);
      if ( searchResult ) {
        this.setState({searchResult});
      }  
    } else {
      this.setState({searchResult: FakeData});
    }
  }

  updateValue(v) {
    this.setState({
      inputValue: v
    })
  }

  render() {
    return (      
      <div className="App">
        <div className="S">
          <Input
            value = {this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <List 
            onClick = { this.updateValue }
            items={ this.state.searchResult } 
          />
        </div>
      </div>
    );
  }
}


export default App;
