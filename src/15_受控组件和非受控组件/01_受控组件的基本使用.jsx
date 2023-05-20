import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      userName:"coderwhy"
    }
  }
inputChange(event){
  console.log("inputChnage", event.target.value)
  this.setState({userName: event.target.value}, ()=>{
    console.log(this.state.userName)
  })
}

  render() {
    const {userName} = this.state
    return (
      <div>
         {/* 受控组件 */}
        <input type="text" value={userName} onChange={e=>this.inputChange(e)}/>

         {/* 非受控组件 */}
        <input type="text" />
        <h2>username:{userName}</h2>
      </div>
    )
  }
}

export default App