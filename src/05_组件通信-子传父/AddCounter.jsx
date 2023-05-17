import React, { Component } from 'react'


export class AddCounter extends Component {
  AddCount(count){
    console.log("counter", count)

    // 接收父组件的props里面的addClick函数
    this.props.addClick(count)
 
  }
  render() {
    return (
      <div>
        <button onClick={e=>this.AddCount(1)}>+1</button>
        <button onClick={e=>this.AddCount(5)}>+5</button>
        <button onClick={e=>this.AddCount(10)}>+10</button>

      </div>
    )
  }
}

// AddCounter.propTypes={
//   AddCount:PropTypes.func
// }

export default AddCounter