import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function(props, ref){
  return (
    <div>
      <h2 ref={ref}>Hello World</h2>
      <p>lololo</p>
    </div>
  )
})




export class App extends PureComponent {
  constructor(){
    super()
    this.hwRef = createRef()
  
  }

 getComponent(){
  // 获取helloworld组件实例
    console.log(this.hwRef.current)

 }
 
  render() {
    return (
      <div>
         <HelloWorld ref={this.hwRef}/>
         <button onClick={e=> this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App