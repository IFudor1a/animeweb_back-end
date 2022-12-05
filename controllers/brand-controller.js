const {Brand} = require('../models/brand-model')

class CategoryController {
    async getAll (req, res) {
        const brands = await Brand.find()
        return res.json(brands)
    }

    async create (req, res) {
        const {name} = req.body
        const brands = await Brand.create({name:name})
        return res.json(brands)
    }

    async delete (req, res) {
        const id = req.body.id
        const brand = await Brand.deleteOne({_id: id})
        return res.json(brand)
    }

    async update (req, res) {
        const {id, brand} = req.body;
        const brands = await Brand.updateOne({_id: id}, {$set: {category: category}})
        return res.json(brands)
    }

}

module.exports = new CategoryController();