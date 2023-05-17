import React, { memo } from 'react'
import ThemeContext from './context/theme-context'

const HomeBanner = memo(() => {
  return (
    <div>
      <span>HomeBanner</span>
       {/* 函数式组件中使用Context共享的数据 */}
      <ThemeContext.Consumer>
          
        {

          // 回调函数会把value传过来
          value=>{
            return <h2>Banner theme: {value.color}</h2>
          }
        }

      </ThemeContext.Consumer>
      </div>
  )
})

export default HomeBanner