import React, { memo } from 'react'

const Profile = memo((props) => {
  console.log("profile counter")
  return (
    <div><h2>Profile:{props.message}</h2></div>
  )
})

export default Profile