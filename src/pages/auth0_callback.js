import React from 'react'
import { ClipLoader } from 'react-spinners'

import Layout from '../components/layout'
import Auth from '../utils/auth'

const auth = new Auth()
 
const Auth0CallbackPage = () => {
 
 auth.handleAuthentication()
  return (
  
    <Layout>
	
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
      <ClipLoader sizeUnit="px" size={150} />
    </Layout>
  )
}
 
export default Auth0CallbackPage