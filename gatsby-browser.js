/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const Auth = require('./src/utils/auth').default

exports.onClientEntry = () => {
	console.log(localStorage.getItem('isLoggedIn'))
	if(localStorage.getItem('isLoggedIn')===true){
		const auth = new Auth()
		console.log(auth)
	//	auth.renewSession();
	}else{
		console.log("test")
	}
	
}