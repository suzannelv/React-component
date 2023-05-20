import React, { PureComponent } from 'react'
import Cart from './page/Cart'


export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      isLogin: false
    }
  }

loginClick(){

  localStorage.setItem("token", "why")
  this.setState({isLogin:true})
  
  // 强制更新
  // this.forceUpdate()


}

  render() {
    const {isLogin} = this.state
    return (
      <div>
       App
       <button onClick={e => this.loginClick()}>登录</button>
       <Cart/>
      </div>
    )
  }
}

export default App