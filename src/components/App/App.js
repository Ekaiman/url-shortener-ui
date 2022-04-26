import React, { Component } from 'react'
import './App.css'
import UrlContainer from '../UrlContainer/UrlContainer'
import UrlForm from '../UrlForm/UrlForm'
import getUrls from '../../apiCalls.js'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => this.setState({ urls: [...data.urls] }))
  }

  createShortUrl = urlObj => {
    fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        long_url: urlObj.urlToShorten,
        title: urlObj.title
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ urls: [...this.state.urls, data] }))
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>URL Shortener</h1>
          <UrlForm createShortUrl={this.createShortUrl} />
        </header>

        <UrlContainer urls={this.state.urls} />
      </main>
    )
  }
}

export default App
