import React, { PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      message:"Hello world",
      counter:0
    }
  }

  // shouldComponentUpdate(nextProps, newState){
  //   if(this.state.message !== newState.message || this.state.counter !== newState.counter){
  //     return true
  //   }
  //   return false
  // }

  changeText(){
    this.setState({message:"Bonjour"})
    // this.setState({message: "Hello world"})
  }
  increment(){
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    console.log("App render fn")
    const {message, counter} = this.state
    return (
      <div>
        <h2>App-{message}-{counter}</h2>
        <button onClick={e=>this.changeText()}>changer text</button>
        <button onClick={e => this.increment()}>counter+1</button>

        <Home message={message}/>
        <Recommend counter={counter}/>
        <Profile message={message}/>
      </div>
    )
  }
}

export default App