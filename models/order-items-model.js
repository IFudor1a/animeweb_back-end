const {Schema, model} = require('mongoose')

const OrderItemSchema = new Schema({
    order: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    line_item_id: {type: Number, default: 1},
    product: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    unit_price: [{type: Number, required: true}],
    quantity: {type: Number, default: 1}

})
const OrderItem = model('OrderItem', OrderItemSchema);

module.exports = {
    OrderItem
}