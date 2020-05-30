import React,{useState} from 'react'
import { Button, Container, Toast} from 'reactstrap';
import {Link} from 'react-router-dom'

const Signup= ()=>{
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [income,setIncome] = useState("")
	const [members,setMembers] = useState("")
	const [location,setLocation] = useState("")
	const SaveData =()=>{
		fetch("/signup",{
			method:"post",
			headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({
			name:name,
			email:email,
			password:password,
			income:income,
			members:members,
			location:location
		})
	      }).then(res=>res.json())
		.then(data=>{
			if(data.error){
			console.log(data);
			Toast({html:data.error})
			}
			else{		}
		})
	}

	return (
		<div className="mycard">
		<div className="card auth-card">
          	<h2>SignUp</h2> 
		<input
		type="text"
		placeholder="Name"
		value={name}
		onchange={(e)=>setName(e.target.value)}
		/>
		<input
		type="text"
		placeholder="Email"
		value={email}
		onchange={(e)=>setEmail(e.target.value)}
		/>
		<input
		type="text"
		placeholder="Password"
		value={password}
		onchange={(e)=>setPassword(e.target.value)}
		/>
		<input
		type="text"
		placeholder="Monthly income of the family (in rupees)"
		value={income}
		onchange={(e)=>setIncome(e.target.value)}
		/>
		<input
		type="text"
		placeholder="No of members in family"
		value={members}
		onchange={(e)=>setIncome(e.target.value)}
		/>
		<input
		type="text"
		placeholder="Location"
		value={location}
		onchange={(e)=>setLocation(e.target.value)}
		/>
<container style={{ marginTop:30 }}>
		  <button className="btn waves-effect waves-light" onClick={()=>SaveData()}>SignUp
  </button>
</container>
<br/>
<h5>
<Link to="/login">Already have an account ?</Link>
</h5>
		</div>
		</div>
	)
}

export default Signup