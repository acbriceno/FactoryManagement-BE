function messages(parent, args, context, info) {
	return context.prisma.messages()
}

function machines(parent, args, context, info){
	return context.prisma.machines()
}
module.exports={
	messages,
	machines,
}