import React, { Component } from 'react'

export class SubCount extends Component {

  subCounter(count){
    console.log("counter",  count)
    this.props.subClick(-count)
  }
  render() {
    return (
      <div>
        <button onClick={e=>this.subCounter(-1)}>-1</button>
        <button onClick={e=>this.subCounter(-5)}>-5</button>
        <button onClick={e=>this.subCounter(-10)}>-10</button>
      </div>
    )
  }
}

export default SubCount