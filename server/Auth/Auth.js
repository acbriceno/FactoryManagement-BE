let Role = {
	USER:1, 
	ADMIN : 2,
	ADMINVIEW: 3,
	properties: {
		1: {name: "USER", value:1, code: "USER"},
		2: {name: "ADMIN", value:1, code: "ADMIN"},
		3: {name: "USER", value:1, code: "ADMINVIEW"}
	}
}

function isAdmin(userRole) {
	var role = Role.ADMIN
	var code = Role.properties[role].code
	if(userRole == code){
		return true;
	}
	return false
}

//console.log(isAdmin("ADMIN"))
module.exports = {
	isAdmin,
	Role,
}