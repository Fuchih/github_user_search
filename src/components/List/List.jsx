import React from 'react'
import PubSub from 'pubsub-js'

export default class List extends React.Component {
  state = {
    users: [],
    isFirstRender: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('updateData', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirstRender, isLoading, err } = this.state

    return (
      <React.Fragment>
        <div className="row">
          {
            isFirstRender ? <h2>Enter name to search</h2> :
            isLoading ? <h2>Loading ...</h2> :
            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
            users.length === 0 ? <h2>No Result</h2> :
            users.map((userObj) => {
              return (
                <div key={userObj.id} className="card">
                  <a href={userObj.html_url} target="_blank" rel="noreferrer">
                    <img src={userObj.avatar_url} alt="avatar" style={{ width: '80px' }} />
                    </a>
                    <p className="card-text">{userObj.login}</p>
                </div>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}
