import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp'
import store from './components/store'

class App extends Component {
  render() {
    return (<TodoApp  {...store.getState()} />)
  }
}


export default App;


