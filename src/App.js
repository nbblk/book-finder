import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Form from './Form';
import Loader from './Loader';
import Result from './Result';
import { API_KEY } from './key';

class App extends Component {

  state = { query: '', books: [], isLoading: false, isLoaded: false };

  inputChangeHandler(event) {
    this.setState({ query: event.target.value });
  };

  findButtonHandler (event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=${API_KEY}`)
    .then(resp => {
      this.setState({ books: resp.data.items, isLoading: false, isLoaded: true })
    })
    .then(() => { this.setState({ isLoaded: false }) })
    .catch(err => {
      console.log(err);
    });
  };

  render () {
    return <div className="App">
      <h1>Book Finder</h1>
      <Form 
      change={(event) => this.inputChangeHandler(event)}
      click={(event) => this.findButtonHandler(event)}/>
      { this.state.isLoading && !this.state.isLoaded ? <Loader /> : null }
      <Result books={this.state.books}/>
  </div>

  }  
  
}

export default App;
