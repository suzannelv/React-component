import React, { Component } from 'react'
import NavBar from './nav-bar/NavBar'
import NavBarTwo from './nav-bar2/NavbarTwo'


export class App extends Component {
  render() {
    const btn = <button>buton 2</button>
    return (
      <div>
        {/* 1. 使用children实现插槽 */}
        <NavBar>
          <button>Button</button>
          <h2>titre</h2>
          <i>xie ti </i>
        </NavBar>

        {/* 2. 使用props实现插槽 */}
        <NavBarTwo 
          leftSlot={btn}
          centerSlot={<h2>tilte2</h2>}
          rightSlot={<i>xieti 2</i>}
        ></NavBarTwo>
      </div>
    )
  }
}

export default App