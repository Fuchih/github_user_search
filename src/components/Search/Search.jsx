import React from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends React.Component {
  search = async () => {
    try {
      const { keywordElement: { value: keyWord }} = this
      PubSub.publish('updateData', {isFirstRender: false , isLoading: true})
      const res = await axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      PubSub.publish('updateData', { isLoading: false, users: res.data.items })
    }
    catch (error) {
      PubSub.publish('updateData', { isLoading: false, err: error.message })
    }
  }

  /* ---- fetch
  search = async () => {
    try {
      const { keywordElement: { value: keyWord }} = this
      PubSub.publish('updateData', { isFirstRender: false, isLoading: true })
      const res = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await res.json()
      PubSub.publish('updateData', { isLoading: false, users: data.items })
    }
    catch (error) {
      PubSub.publish('updateData', { isLoading: false, err: error.message })
    }
  }
  */

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
