function messages(parent, args, context, info) {
	return context.prisma.messages()
}

function machines(parent, args, context, info){
	return context.prisma.machines()
}

function productionLines(parent, args, context, info){
	return context.prisma.productionLines()
}

function productions(parent, args, context, info){
	return context.prisma.productions()
}
function parameters(parent, args, context, info){
	return context.prisma.parameters()
}
function checks(parent, args, context, info){
	return context.prisma.checks()
}
function tasks(parent, args, context, info){
	return context.prisma.tasks()
}
function datas(parent, args, context, info){
	return context.prisma.datas()
}
function datasets(parent, args, context, info){
	return context.prisma.datasets()
}
function trends(parent, args, context, info){
	return context.prisma.trends()
}
function objectConnection(parent, args, context, info){
	return context.prisma.objectConnection()
}

module.exports={
	messages,
	machines,
	productionLines,
	productions,
	parameters,
	checks,
	tasks,
	datas,
	datasets,
	objectConnection,
	trends,
	
}