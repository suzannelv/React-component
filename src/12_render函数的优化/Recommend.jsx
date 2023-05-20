import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {

  // shouldComponentUpdate(newProps, newState){
  //   if(this.props.counter !== newProps.counter){
  //     return true
  //   }
  //   return false
  // }
  render() {
    console.log("recommend render fn")
    return (
      <div>
        <h2>Recommend-{this.props.counter}</h2>
      </div>
    )
  }
}

export default Recommend