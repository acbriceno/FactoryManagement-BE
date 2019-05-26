function sender(parent, args, context){
	return context.prisma.message({id:parent.id}).sender()
}

function recipients(parent, args, context){
	return context.prisma.message({id:parent.id}).recipients()
}

module.exports = {
	//sender,
	recipients,
}