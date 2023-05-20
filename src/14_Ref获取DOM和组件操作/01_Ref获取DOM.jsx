import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={

    }
    this.titleRef = createRef()
    this.titleEl = null
  }
  getDom(){
     // 1.方式一: 在React元素上绑定一个ref字符串(pas recommandé)
    //  console.log(this.refs.why)

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
      // console.log(this.titleRef.current)

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
     console.log(this.titleEl)

  }
  render() {
    return (
      <div>
        <h2 ref="why">Hello world</h2>
        <h2 ref={this.titleRef}>Bonjour React</h2>
        <h2 ref={el=>this.titleEl = el}>Bonjour VV</h2>
        <button onClick={e=>{this.getDom()}}>Obtenir DOM</button>
      </div>
    )
  }
}

export default App