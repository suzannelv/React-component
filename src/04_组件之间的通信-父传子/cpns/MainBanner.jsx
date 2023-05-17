import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // constructor(props){
  //   console.log(props)
  //   super(props)
  // }
  render() {
    console.log(this.props)
    const {banners, title} = this.props
    return (
      <div>
        <h2>Banner carousel: {title}</h2>
        <ul>
          {
            banners.map(item =>{
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }

}
// MainBanner传入的props类型进行验证
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

// MainBanner传入的props的默认值
MainBanner.defaultProps = {
  banners: [],
  title: "默认标题"
}

export default MainBanner