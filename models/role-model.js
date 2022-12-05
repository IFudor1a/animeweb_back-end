const {Schema, model} = require('mongoose')

const RoleSchema = new Schema({
   role_name: {type: String, required: true}

})
const Role = model('Role', RoleSchema);

module.exports = {
    Role
}