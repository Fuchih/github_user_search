import React from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'
import './App.css'

export default class App extends React.Component {
  state = { users: [] }

  saveUsers = (users) => {
    this.setState({ users })
  }

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />
      </div>
    )
  }
}
