import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log_render_time'

export class Detail extends PureComponent {

  //  UNSAFE_componentWillMount() {
  //   this.beginTime = new Date().getTime()
  // }

  // componentDidMount() {
  //   this.endTime = new Date().getTime()
  //   const interval = this.endTime - this.beginTime
  //   console.log(`当前页面花费了${interval}ms渲染完成!`)
  // }

  render() {
    return (
      <div>
        <h2>Detail page</h2>
        <ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
          <li>list4</li>
          <li>list5</li>
          <li>list6</li>
          <li>list7</li>
          <li>list8</li>
          <li>list9</li>
          <li>list10</li>
        </ul>
      </div>
    )
  }
}

console.log(Detail.name)

export default logRenderTime(Detail)