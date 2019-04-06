import React from "react"
import { navigate } from "gatsby"

import Auth from '../utils/auth'
import Profile from './profile'


const auth = new Auth()

const PrivateRoute = () => {
	
		const { isAuthenticated } = auth
		if (!isAuthenticated()) {
			navigate(`/`)
			return null
		}
 

  return <Profile/>
}

export default PrivateRoute