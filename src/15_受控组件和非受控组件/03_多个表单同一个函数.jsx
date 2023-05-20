import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      username:"",
      password:""
    }

  }

  handleSubmitClick(event){
    // 1.阻止默认的行为
     event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    console.log(this.state.username, this.state.password)


    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)

  }

  // handleUsernameChange(event){
  //   this.setState({username:event.target.value})
  // }
  // handlePasswordChange(event){
  //   this.setState({password: event.target.value})
  // }

  handleInputChange(event){
    // const keyName = event.target.name
    // console.log(keyName)
    // this.setState({
    //   [keyName]:event.target.value
    // })

    this.setState({
      [event.target.name]:event.target.value
    })
  }



  render() {
    const {username, password} = this.state
    return (
      <div>
        <form onSubmit={e=>this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <label htmlFor="username">
            用户:   
          </label>
          <input 
              id='username'
              type="text"
              value={username}
              name='username'
              onChange={e=>this.handleInputChange(e)}
          />

          <label htmlFor="password">
          密码:   
          </label>
          <input 
              id='password'
              type="text"
              value={password}
              name='password'
              onChange={e=>this.handleInputChange(e)}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default App