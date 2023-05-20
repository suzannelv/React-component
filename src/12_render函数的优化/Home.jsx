import React, { PureComponent } from 'react'

export class Home extends PureComponent {

  constructor(props){
    super(props)
    this.state={
      friends:[]
    }

  }
  // shouldComponentUpdate(newProps, newState){
  //    // 自己对比state是否发生改变: this.state和nextState
  //    if(this.props.message !== newProps.message){
  //     return true
  //    }
  //    return false
  // }
  
  render() {
    console.log("Home render fn")
    return (
      <div>
        <h2>Home page-{this.props.message}</h2>
        
      </div>
    )
  }
}

export default Home