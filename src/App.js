import React from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'
import './App.css'

export default class App extends React.Component {
  state = {
    users: [],
    isFirstRender: true,
    isLoading: false,
    err: ''
  }

  updateState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
