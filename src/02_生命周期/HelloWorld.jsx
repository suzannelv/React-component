import React from "react";

class HelloWord extends React.Component{
  // 1.构造方法: constructor
  constructor(){
    console.log("hello word constructor")
    super()

    this.state={
      message: "hello World"
    }
  }

  changeText(){
    this.setState({
      message:"text a changé"
    })
  }

  render(){
    console.log("HelloWorld render")
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <p>{message}是程序员的第一个代码!</p>
        <button onClick={e=>this.changeText()}>changer contenu</button>
      </div>
    )
  }

  // 3.组件被渲染到DOM: 被挂载到DOM
  componentDidMount(){
    console.log("helloworld componentDidMount")
  }

  // 4.组件的DOM被更新完成： DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate", prevProps, prevState, snapshot)
  }
   // 5.组件从DOM中卸载掉： 从DOM移除掉
   componentWillUnmount(){
    console.log("helloworld componentWillUnmount")
   }

    // 不常用的生命周期补充
  shouldComponentUpdate() {
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate")
    return {
      scrollPosition: 1000
    }
  }
}
export default HelloWord