import React from 'react'
import Menu from '../component/Menu'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    let {facebookId, youtubeId} = useParams()
  return (
    <div>
        <Menu />
        <h4>Facebook Account = {facebookId } </h4>
        <h6>Youtube Account = {youtubeId} </h6>
        <h1>This is our Profile Page</h1>
    </div>
  )
}

export default ProfilePage