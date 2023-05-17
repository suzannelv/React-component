import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCount from './SubCount'

export class App extends Component {
  constructor(){
    super()
    this.state={
      counter: 100
    }
  }

  changeCounter(count){
    this.setState({counter: this.state.counter+count})
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>counter:{counter}</h2>
        <AddCounter addClick={(count)=> this.changeCounter(count)}/>
        <SubCount subClick={ (count)=>this.changeCounter(-count) }/>
      </div>
    )
  }
}

export default App