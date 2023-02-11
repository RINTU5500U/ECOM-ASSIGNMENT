const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')

module.exports = {
    createCart : async (req, res) => {
        try {
            let {products} = req.body
            let {productId} = req.params
            let findProducts = await productModel.findById(productId)
            let price = findProducts.price
            let findCart = await cartModel.findById(userId)
            if (findCart.products.length > 5) {
                return res.status(400).send({ status: true, msg: "Your cart is at capacity so u can't add products in ur cart"})
            }
            let saveData = await cartModel.findByIdAndUpdate(userId, { 
                userId: req.decodedToken.userId,
                $push: { products: products},
                totalPrice: { $inc: { totalPrice: (+price) } }
              },{upsert: true})
            return res.status(201).send({ status: true, msg: "Product added in ur cart successfully", Cart: saveData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }
}