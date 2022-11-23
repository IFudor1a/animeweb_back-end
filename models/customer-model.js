const {Schema, model} = require('mongoose')

const CustomerSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    customer_email: {type: String, required: true},
    phone_number: {type: String, required: true},
    password: {type: String, required: true},
    approved: {type: Boolean, default: false}
})

const Customers = model('Customer', CustomerSchema);

module.exports = {
    Customers
}