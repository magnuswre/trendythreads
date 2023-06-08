const router = require('express').Router()
const { getOrders, createNewOrder, getMyOrder } = require('../Model/orderModel')
const auth = require('../authentication/auth')



router.post('/add', auth.verifyToken, createNewOrder)
router.get('/myOrders', auth.verifyToken, getMyOrder )

router.get('/allOrders',  getOrders )

module.exports = router;
