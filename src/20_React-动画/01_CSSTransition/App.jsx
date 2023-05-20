import React, { PureComponent, createRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'


export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      isShow : true 
    }

    this.sectionRef=createRef()
  }
  render() {
    const {isShow} = this.state
    return (
      <div>
        <button onClick={ e=>this.setState({isShow:!isShow})}>Toggle</button>
       {/* {isShow && <h2>bonjour</h2>} */}

       <CSSTransition 
          nodeRef={this.sectionRef}
          in={isShow} 
          unmountOnExit={true} 
          classNames="why" 
          timeout={2000}
          appear
          onEnter={e => console.log("开始进入动画")}
          onEntering={e => console.log("执行进入动画")}
          onEntered={e => console.log("执行进入结束")}
          onExit={e => console.log("开始离开动画")}
          onExiting={e => console.log("执行离开动画")}
          onExited={e => console.log("执行离开结束")}
          >

         <div className="section" ref={this.sectionRef}>
            <h2>Bonjour</h2>
            <p>contenu</p>
         </div>
       </CSSTransition>
      </div>
    )
  }
}

export default App