function messages(parent, args, context, info) {
	return context.prisma.messages()
}

module.exports={
	messages,
}