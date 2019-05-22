function inbox(parent, args, context){
	return context.prisma.user({id:parent.id}).inbox()
}

function outbox(parent, args, context){
	return context.prisma.user({id:parent.id}).outbox()
}

module.exports = {
	inbox,
	outbox,
}