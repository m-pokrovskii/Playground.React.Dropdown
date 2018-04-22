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
      inputValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.searcher = this.searchInit();
  }

  updateValue(item) {
    this.setState({
      inputValue: item.label
    });
  }

  searchInit() {
    return new FuzzySearch(FakeData, ['label'], {});
  }

  handleInputChange(e) {
    this.updateValue(e.target.value);
    
    const inputValue = e.target.value.trim();
    if (inputValue) {
      const searchResult = this.searcher.search(inputValue);
      if ( searchResult ) {
        this.setState({searchResult});
      }  
    } else {
      this.setState({searchResult: FakeData});
    }
  }


  render() {
    return (      
      <div className="App">
        <div className="S">
          <Input
            inputValue = {this.state.inputValue}
            handleInputChange={this.handleInputChange}
          />
          <List 
            updateValue = { this.updateValue }
            items={ this.state.searchResult } 
          />
        </div>
      </div>
    );
  }
}


export default App;
