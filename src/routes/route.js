const express = require("express")
const router = express.Router()

const {createUser, login, fetchUserById, updateUser} = require('../controllers/userController')
const {createProduct, updateProduct} = require('../controllers/productController')
const {createCart} = require('../controllers/cartController')
const {authentication, authorization} = require('../middleware/auth')

router.post('/createUser', createUser)
router.post('/login', login)
router.get('/fetchUserById/:userId', authentication, fetchUserById)
router.put('/updateUser/:userId', authentication, authorization, updateUser)

router.post('/createProduct', authentication, createProduct)
router.put('/user/:userId/updateProduct', authentication, authorization, updateProduct)

router.post('/createCart', authentication, authorization, createCart)
router.all("/*", function (req, res) { 
    return res.status(400).send({ status: false, message: "invalid http request" });
});

module.exports = router