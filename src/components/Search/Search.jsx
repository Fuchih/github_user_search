import React from 'react'
import axios from 'axios';

export default class Search extends React.Component {
  state = {
    keywords: ''
  }

  search = async () => {
    const { keywordElement:{value: keyWord} } = this
    const res = await axios.get(`https://api.github.com/search/users?q=${keyWord}`)
    this.props.saveUsers(res.data.items)
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h1>Search Github Users</h1>
          <div>
            <input ref={(c) => (this.keywordElement = c)} type="text" placeholder="enter the name..." />
            &nbsp;
            <button onClick={this.search} className="btn-primary">
              Search
            </button>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
