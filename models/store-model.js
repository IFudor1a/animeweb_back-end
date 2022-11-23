const {Schema, model} = require('mongoose')

const StoreSchema = new Schema({
    store_name: {type: String, required: true},
    physical_address: {type: String, required: true},
    latitude: {type: Number, required:false},
    longitude: {type: Number, required: false}
})

const Store = model('Store', StoreSchema);

module.exports = {
    Store
}