const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../util')

async function signup(parent, args, context, info){
	const password = await bcrypt.hash(args.password, 10)
	const user = await context.prisma.createUser({...args, password})
	const token = jwt.sign({userID: user.id}, APP_SECRET)
	
	return {
		token, 
		user,
	}
}

async function login(parent, args, context, info){
	const user = await context.prisma.user({username: args.username})
	console.log(user)
	if(!user){
		//throw new Error("No such user found")
	}
	
	const valid = await bcrypt.compare(args.password, user.password)
	if(!valid) {
		//throw new Error("Invalid Password")
	}
	
	const token = jwt.sign({userId: user.id}, APP_SECRET)
	
	return {
		token, 
		user,
	}
}

async function sendMessage(parent, args, context) {
	const userId = getUserId(context)
	let recipients = []

	for(let x=0; x<args.recipients.length;x++){
		console.log(args.recipients[x])
		let user = await context.prisma.user({ username: args.recipients[x]})
		console.log(user)

		if(user){
			let recipient ={
				id: user.id
			}
			recipients.push(recipient);
		}else{
			//throw new Error("No such user found")
		}
		
	}
	console.log(recipientsConnection)
	
	return context.prisma.createMessage({
		subject: args.subject,
		body: args.body,
		sender: {connect: {id: userId}},
		recipients : {connect: recipients},
	})
}

module.exports = {
	signup,
	login, 
	sendMessage,
}