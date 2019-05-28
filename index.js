// var express = require('express');
// var app = express();
// var serv = require('http').Server(app);
// serv.listen(2000);
//
// //Socket Connections
// var io = require('socket.io')(serv,{});
//
// io.sockets.on('connection',function(socket){
//   console.log('socket connection');
// });


const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require ('./server/generated/prisma-clients')

const Query = require('./server/resolvers/Query')
const Mutation = require('./server/resolvers/Mutation')
const User = require('./server/resolvers/User')
const Message = require('./server/resolvers/Message')
const Machine = require('./server/resolvers/Machine')
const Data = require('./server/resolvers/Data')
const resolvers = {
  Query,
  Mutation,
  User,
  Message,
  Machine,
  Data
}

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql', 
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})



server.start(()=> console.log(`Server is running at http://localhost:4000`))
	
// async function main() {
//
// 	//Create new Message
// 	const newMessage = await prisma.createMessage({subject:'Urgent Machine Overflow', body:'Machine stopped due to oil leak flow'})
// 	console.log(newMessage)
//
// 	//Read all Messages
// 	const allMessages = await prisma.messages()
// 	console.log(allMessages)
// }
//
// main().catch(e=> console.error(e))

// async function main() {


// 	const machine = await prisma.machine({id: '5cec0fab0274390007ab1b5b'}).createdBy()
// 	console.log(machine)
// 	// //Create new Message
// 	// const ProductionLine = await prisma.createProductionLine({name:'4" Elbow Pipe', description:'INTL Elbow', createdBy: {connect: {id: user.id }} })
// 	// console.log(ProductionLine)

// 	// Read all Messages
// 	// const allProductionLine = await prisma.productionLines()
// 	// console.log(allProductionLine)
// }

// main().catch(e=> console.error(e))