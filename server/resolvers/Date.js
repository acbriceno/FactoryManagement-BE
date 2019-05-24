var {GraphQLScalarType} = require ('graphql')
var {Kind} =  require('graphql/language')

const DateTime= new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom Scalar Type',
		parseValue(value) {
			return new Date(value);
		},
		serialize(value){
			return value.getTime();
		},
		parseLiteral(ast){
			if(ast.kind == Kind.INT){
				return new Date(ast.value)
			}
			return null;
		},
	})
	


module.exports = {
	DateTime,
}