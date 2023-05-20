import React, { Component } from 'react'

function Hello(props){
  return <h2>{props.message}</h2>
}

export class App extends Component {
  constructor(){
    super()
    this.state={
      message:"hello world",
      counter:0
    }
  }

  componentDidMount(){
    // 1.网络请求一: banners

    // 2.网络请求二: recommends

    // 3.网络请求三: productlist
  }

  changeText(){
    this.setState({message:"你好啊,李银河"})
    console.log(this.state.message)
    
  }

  increment(){
  console.log("--------")
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    this.setState((state)=>{
      return {
        counter:state.counter + 1
      }
    })
    this.setState((state)=>{
      return {
        counter:state.counter + 1
      }
    })
    this.setState((state)=>{
      return {
        counter:state.counter + 1
      }
    })

  }


  
  render() {

    const {message, counter} = this.state
    console.log("render fn est exécuté")
    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e=>this.changeText()}>changer text</button>
        <h2>counter: {counter}</h2>
        <button onClick={e=> this.increment()}>counter+1</button>
        <Hello message={message}/>
      </div>
    )
  }
}

export default App