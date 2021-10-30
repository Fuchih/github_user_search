import React from 'react'

export default class List extends React.Component {
  render() {
    const { users, isFirstRender, isLoading, err } = this.props

    return (
      <React.Fragment>
        <div className="row">
          {
            isFirstRender ? <h2>Enter name to search</h2> :
            isLoading ? <h2>Loading ...</h2> :
            err ? <h2 style={{color: 'red'}}>{err}</h2> :
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
