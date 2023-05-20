import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      username:"",
      password:"",
      isAgree:false,
      hobbies:[
        {value: "sing", text: "sing", isChecked: false},
        {value: "danse", text: "danse", isChecked: false},
        {value: "rap", text: "rap", isChecked: false},

      ],
    
    }

  }

  handleSubmitClick(event){
    // 1.阻止默认的行为
     event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    console.log(this.state.username, this.state.password)
    const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item=>item.value)
    console.log("hobbies", hobbies)


    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)

  }


  handleInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleAgreeChange(event){
    console.log(event.target.checked)
    this.setState({isAgree: event.target.checked})

  }

  handleHobbiesChange(event, index){
    const hobbies=[...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({hobbies})
  }



  render() {
    const {username, password, isAgree, hobbies} = this.state
    return (
      <div>
        <form onSubmit={e=>this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
           <div>
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
           </div>

           {/* 2.checkbox */}
           <label htmlFor="agree">
             <input 
               type="checkbox" 
               name="" 
               id="agree" 
               checked={isAgree} 
               onChange={e=>this.handleAgreeChange(e)}/> 同意协议
           </label>

           {/* 3.checkbox多选  */}

           <div>
              {/* <label htmlFor="sing">
                <input type="checkbox" name="" id="sing" />sing
              </label>
              <label htmlFor="danse">
                <input type="checkbox" name="" id="danse" />danse
              </label>
              <label htmlFor="rap">
                <input type="checkbox" name="" id="rap" />rap
              </label> */}

              您的爱好:{
                 hobbies.map((item, index) => {
                   return(
                    <label htmlFor={item.value} key={item.value}>
                      <input 
                         type="checkbox" 
                         id={item.value} 
                         checked={item.isChecked}
                         onChange={e=>this.handleHobbiesChange(e, index)}
                         /> 
                         {item.text}
                    </label>
                   )
                 })
              }
           </div>

           

          <div>
            <button type='submit'>submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App