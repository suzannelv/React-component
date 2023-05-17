import React, { Component } from 'react'
import Header from './cpns/Header'
import Footer from './cpns/Footer'
import Main from './cpns/Main'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App