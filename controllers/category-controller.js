const {Category} = require('../models/category-model')

class CategoryController {
    async getAll (req, res) {
        const categories = await Category.find()
        return res.json(categories)
    }

    async create (req, res) {
        const {name} = req.body;
        const categories = await Category.create({name:name})
        return res.json(categories)

    }

    async delete (req, res) {
        const id = req.body.id
        const category = await Category.deleteOne({_id: id})
        return res.json(category)
    }

    async update (req, res) {
        const {id, category} = req.body;
        const categories = await Category.updateOne({_id: id}, {$set: {category: category}})
        return res.json(categories)
    }

}

module.exports = new CategoryController();