const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.get('/',(req,res)=>{
	res.send("hello")
})

router.post('/signup',(req,res)=>{
	const {name,email,password,income,members,location} = req.body
	if(!email || !password || !name || !income || !members || !location){
		return res.status(422).json({error:"please add all the fields"})
	}
	User.findOne({email:email})
	.then((savedUser)=>{
	if(savedUser){
		return res.status(422).json({error:"user already exists with that email"})
	}
	const user = new User({
		name,
		email,
		password,
		income,
		members,
		location
	})
	user.save()
	.then(user=>{
		return res.json({message:"saved successfully"})
	})
	.catch(err=>{
		console.log(err)
	})
	})

	.catch(err=>{
	console.log(err)
	})
})



module.exports = router