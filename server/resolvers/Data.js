async function parameter(parent, args, context){
    return await context.prisma.data({id: parent.id}).parameter()
}

module.exports = {
    parameter,
}