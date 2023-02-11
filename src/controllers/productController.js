const productModel = require('../models/productModel')

module.exports = {
    createProduct : async (req, res) => {
        try {
            let saveData = await productModel.create(req.body)
            return res.status(201).send({ status: true, msg: "Product created successfully", Product: saveData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    updateProduct : async (req, res) => {
        try {
            let {userId} = req.params
            req.body['updatedAt'] = new Date().toLocaleString()
            let updateData = await productModel.findByIdAndUpdate(userId, req.body, {new: true})
            return res.status(200).send({ status: true, msg: "Product updated successfully", Product: updateData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }
}