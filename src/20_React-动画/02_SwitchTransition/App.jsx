import React, { Component } from 'react'
import './style.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      isLogin : true
    }
  }


  render() {
    const {isLogin} = this.state
    return (
      <div>
        <SwitchTransition mode='out-in'>
          <CSSTransition 
            key={isLogin ? 'exit' : 'login'}
            classNames = "login"
            timeout={1000}
            
            > 
            <button onClick={e=>this.setState({isLogin:!isLogin})}>
              {isLogin? "exit": "login"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App