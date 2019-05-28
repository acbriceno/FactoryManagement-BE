async function createdBy(parent, args, context){
     return await context.prisma.machine({id: parent.id}).createdBy()
}

async function parameters(parent, args, context){
    return await context.prisma.machine({id: parent.id}).parameters()
}
async function data(parent, args, context){
    return await context.prisma.machine({id: parent.id}).data()
}

module.exports = {
    createdBy,
    parameters,
	data,
}