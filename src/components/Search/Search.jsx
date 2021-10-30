import React from 'react'
import axios from 'axios'

export default class Search extends React.Component {
  search = async () => {
    try {
      const { keywordElement: { value: keyWord }} = this
      this.props.updateState({ isFirstRender: false, isLoading: true })
      const res = await axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      this.props.updateState({ isLoading: false, users: res.data.items })
    } catch (error) {
      this.props.updateState({ isLoading: false, err: error.message })
    }
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h1>Search Github Users</h1>
          <div>
            <input ref={(c) => (this.keywordElement = c)} type="text" defaultValue="fuchih" />
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
