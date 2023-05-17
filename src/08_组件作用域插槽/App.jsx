import React, { Component } from 'react'
import TabControl from './TabControl/index'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0
    }
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className='app'>
        <TabControl 
          titles={titles} 
          tabClick={i => this.tabClick(i)}
          itemType={item => <button>{item}</button>}/>
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App