import React, { Component } from 'react'
import axios from 'axios'
import MainBanner from './MainBanner'
import MainProdList from './MainProdList'


export class Main extends Component {
  constructor(){
    super()
    this.state={
      banners: [],
      produitList:[]
    }
  }

  componentDidMount(){
   axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
    // console.log(res)
    const banners = res.data.data.banner.list
    const recommend = res.data.data.recommend.list

    // console.log(banners)
    // console.log(recommend)
    this.setState({
      banners:banners, 
      produitList: recommend
    })
   })
  }
  render() {
    const {banners, produitList} = this.state
    return (
      <div className="main">
        <MainBanner banners={banners} title="title"/>
        <MainProdList produitList={produitList}/>
      </div>
    )
  }
}

export default Main