const {Schema, model} = require('mongoose')

const OrderSchema = new Schema({
    order_datetime: {type: Date, required: true, default: Date.now},
    customer: [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    order_status: {type: String, required: false, default: 'OPEN'},
    order_address: {type: String, required: true}
})

const Orders = model('Order', OrderSchema)

module.exports = {
    Orders
}