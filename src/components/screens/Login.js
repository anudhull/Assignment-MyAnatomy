import React from 'react'
import { Button, Container} from 'reactstrap';
import {Link} from 'react-router-dom'
const Login= ()=>{
	return (
		<div className="mycard">
		<div className="card auth-card">
          	<h2>Login</h2> 
		<input
		type="text"
		placeholder="Email"
		/>
		<input
		type="text"
		placeholder="Password"
		/>
<container style={{ marginTop:60 }}>
		  <Button className="btn waves-effect waves-light">LogIn
  </Button>
</container>
<h5>
<Link to="/signup">Don't have an account ?</Link>
</h5>
		</div>
		</div>
	)
}

export default Login