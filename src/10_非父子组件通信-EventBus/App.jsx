import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      age:0,
      height:0
    }
  }

  componentDidMount(){
    // eventBus.on("bannerPrev", (name, age, height)=>{
    //   console.log("app ecouter bannerprev", name, age, height)
    //   // 对象增强
    //   this.setState({name, age, height})
    // })
    eventBus.on("bannerPrev", this.bannerPrevClick.bind(this))
    eventBus.on("bannerNext", this.bannerNextClick, this)

  }

  bannerPrevClick(name, age, height){
    
      console.log("app ecouter bannerprev", name, age, height)
      // 对象增强
      this.setState({name, age, height})
   
  }

  bannerNextClick(info){
    console.log("app écouter next")
  }

  componentWillUnmount(){
   eventBus.off("bannerPrev", this.bannerPrevClick)
  }

  render() {
    const {name, age, height} = this.state
    return (
      <div>
        <h2>App: {name}-{age}-{height}</h2>
        <Home/>
      </div>
    )
  }
}

export default App