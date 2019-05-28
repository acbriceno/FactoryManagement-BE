const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId, } = require('../util')
const {Role, isAdmin} = require('../Auth/Auth')
const GraphQLDate = require('./Date')
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
		//console.log(args.recipients[x])
		let user = await context.prisma.user({ username: args.recipients[x]})
		//console.log(user)

		if(user){
			let recipient ={
				id: user.id
			}
			recipients.push(recipient);
		}else{
			//throw new Error("No such user found")
		}
		
	}
	console.log(userId)
	
	return context.prisma.createMessage({
		subject: args.subject,
		body: args.body,
		sender: {connect: {id: userId}},
		recipients : {connect: recipients},
	})
}

async function addMachine(parent, args, context){
	const userId = getUserId(context)
	const user = await context.prisma.user({ id: userId}) 
	if(isAdmin(user.role)){
		let parameters = []
		let datas = []
		for(let x=0; x<args.parameters.length;x++){
			console.log(args.parameters[x])
			let parameterHolder = await context.prisma.createParameter({
				name: args.parameters[x].name, 
				unit: args.parameters[x].unit,
				set: args.parameters[x].set,
				toleranceLow: args.parameters[x].toleranceLow,
				toleranceHigh: args.parameters[x].toleranceHigh,
				connection: args.parameters[x].connection
			})
			let parameter = {
				id: parameterHolder.id
			}
			let dataHolder = await context.prisma.createData({
				parameter: {connect: parameter} 
			})
			let data = {
				id: dataHolder.id
			}

			parameters.push(parameter)
			datas.push(data)
		}
		//Need to add action to error: unique constraint on machine due to serial number
		return context.prisma.createMachine({
			...args,
			lastServiceDate: GraphQLDate.DateTime.parseValue(args.lastServiceDate),
			nextServiceDate: GraphQLDate.DateTime.parseValue(args.nextServiceDate),
			createdBy: {connect: {id: userId}},
			parameters: {connect: parameters},
			data: {connect: datas}
		})
	}
}

async function addParameter(parent, args, context){
	return context.prisma.createParameter({
		...args,
	})
}

module.exports = {
	signup,
	login, 
	sendMessage,
	addMachine,
	addParameter,
}