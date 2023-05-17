import React, { Component } from 'react'

export class MainProdList extends Component {
  // 可省略，内部自动传入
  // constructor(props){
  //   super(props)
  // }
  render() {
    const {produitList} = this.props
    return (
      <div>
        <h2>liste des produits</h2>
        <ul>
         {
        produitList.map(item=>{
          return <li key={item.acm}>{item.title}</li>
         })
         }
        </ul>
      </div>
    )
  }
}

export default MainProdList