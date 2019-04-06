import React from "react"
import Auth from '../utils/auth'
const auth = new Auth()

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {auth.getUserName()}</li>
      <li>E-mail: {auth.getUserEmail()}</li>
    </ul>
  </>
)

export default Profile