const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
      product_name: {type: String, unique: true, required:true},
      product_images: {type: String, unique: false, required: false},
      unit_price: {type: String, unique: false, required: true},
      product_description: {type:String, unique: false, required: true},
      product_consists: {type:String, unique:false, required: false},
      brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
      category: {type: Schema.Types.ObjectId, ref: 'Category'},
      created_at: {type: Schema.Types.Date, default: Date.now()}
})


const Products = model('Product', ProductSchema);

module.exports = {
      Products
}