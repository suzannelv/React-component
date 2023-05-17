import React from "react";
import HelloWord from "./HelloWorld";


class App extends React.Component{
  constructor(){
    super()
    this.state={
      isShowHW:true
    }
  }

  switchHWShow(){
    this.setState({isShowHW:!this.state.isShowHW})
  }
 render(){
  const {isShowHW} = this.state
  return (
    <div>
      hahaha
      <button onClick={e=>this.switchHWShow()}>toggle</button>
      {isShowHW && <HelloWord/>}
    </div>
  )
 }
}
export default App