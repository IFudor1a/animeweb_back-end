const path = require("path");
const {formerProduct, fileUpload} = require("../service/product-service");

const {Products} = require('../models/product-model');

class ProductController {
     async getAll(req, res) {
         const products = await Products.find()
         return res.json(products);
     }

     async create(req, res) {
         if(!req.files) return res.status(400).json({msg: '[SERVER] Error no file content'})
         if(!req.body) return res.status(400).json({msg: '[SERVER] Error no body content'})
         const Photos = await fileUpload(req.files)
         const product = formerProduct(req.body.name,req.body.description, req.body.consists, req.body.price, Photos)
         const products = await Products.create(product)
         return res.json(products)


     }

     async delete(req, res) {
         const id = req.body.id
         const product = await Products.deleteOne({_id: id})
         return res.json(product)
     }

     async update(req, res) {
         const {id, product} = req.body;
         const products = await Products.updateOne({_id: id}, {$set: {product: product}})
         return req.json(products)
     }
}

module.exports = new ProductController();