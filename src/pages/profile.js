import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Auth from '../utils/auth'
import Login from '../components/Login'


const auth = new Auth()
const ProfilePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
	<div>Welcome {auth.getUserName()}</div>
	
    <Link to="/">Go to home page</Link>
  </Layout>
)

export default ProfilePage
