import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProdList from './MainProdList'

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <MainBanner/>
        <MainProdList/>

      </div>
    )
  }
}

export default Main