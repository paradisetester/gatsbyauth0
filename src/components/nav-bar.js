import React from "react"
import { Link, navigate } from "gatsby"
import Auth from '../utils/auth'
import Login from '../components/Login'

export default () => {
	const auth = new Auth()
	
  const content = { message: "", login: true }
  	 const { isAuthenticated } = auth
	if (isAuthenticated()) {
		content.message = `Hello, `
	}else{
		 content.message = "You are not logged in"
	}
  
 
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{content.message}</span> 
      <nav>
        <Link to="/">Home</Link>
       
        <Link to="/app/profile">Profile</Link> 
       
        {isAuthenticated() ? (
          <a
            href="/"
           onClick={auth.logout}
          >
            Logout
          </a>
        ) : <Login auth={auth} />}
      </nav>
    </div>
  )
}