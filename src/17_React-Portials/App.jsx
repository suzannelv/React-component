import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App h1</h1>
        {
          createPortal(<h2>App h2</h2>, document.querySelector('#why'))
        }

        {/* 2.Modal组件 */}

        <Modal>
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </Modal>

      </div>
    )
  }
}

export default App