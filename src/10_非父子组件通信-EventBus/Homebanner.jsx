import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class Homebanner extends Component {

  prevClick(){
    console.log("prev")
    eventBus.emit("bannerPrev", "why", 18, 1.77)
  }

  nextClick(){
    console.log("next")
    eventBus.emit("bannerNext", {nickName:"Kobe", level:99})
  }
  render() {
    return (
      <div>
        <h2>Homebanner</h2>
        <button onClick={e=>this.prevClick()}>previous</button>
        <button onClick={e=>this.nextClick()}>next</button>
        
      </div>
    )
  }
}

export default Homebanner