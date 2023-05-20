
import React, { Component, Fragment } from 'react'

export class App extends Component {
  constructor(){
    super()

    this.state={
      sections: [
        { title: "哈哈哈", content: "我是内容, 哈哈哈" },
        { title: "呵呵呵", content: "我是内容, 呵呵呵" },
        { title: "嘿嘿嘿", content: "我是内容, 嘿嘿嘿" },
        { title: "嘻嘻嘻", content: "我是内容, 嘻嘻嘻" },
      ]
    }
  }


  render() {
    const {sections} = this.state
    return (
      // 如果不希望外面多一层div，可以用fragment包裹,或者可以省略

       <>
        <h2>titre</h2>
        <p>contenu</p>
        <hr />
         {
          sections.map(item => {
            return (
              // 如果绑定key，就不可以省略写法，必须完整写<Fragment></Fragment>
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fragment>
            )
          })
         }


       </>

 
    )
  }
}

export default App