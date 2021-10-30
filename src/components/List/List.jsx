import React from 'react'

export default class List extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.props.users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img src={userObj.avatar_url} alt="avatar" style={{ width: '80px' }} />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
