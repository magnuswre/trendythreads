const Order = require('../Schema/orderSchema')


exports.createNewOrder = async (req, res) => {
    const { orderRows } = req.body

    if(!orderRows) {
        return res.status(400).json({
            message: "you need to enter all the fields"
        })
    }
    try {
        const data = await Order.create({
            orderRows,
            userId: req.userId
        })
      res.status(201).json({ userId: data.userId })



    } catch (err) {
        return res.status(500).json({
            message: "something went wrong when createing the order",
            err: err.message,
        })
    }
}

exports.getMyOrder = async (req, res) => {

    const orders = await Order.find({userId: req.userId})

    if(!orders){
        return res.status(404).json({message: 'Could not fint the orders'})
    }

    res.status(200).json(orders)
}


exports.getOrders = async (req, res) =>{
    const orders = await Order.find().populate({
        path: 'user', 
        select: "_id email "
    })
    if(!orders){
        return res.status(404).json({message: 'Could not fint the orders'})
    }

    res.status(200).json(orders)
}