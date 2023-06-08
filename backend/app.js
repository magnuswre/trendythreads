const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.use('/api/product', require('./controllers/productControl'))
app.use('/api/user', require('./controllers/userControl'))
app.use('/api/order', require('./controllers/orderControl'))
app.use('/api/contact', require('./controllers/contactControl'))


module.exports = app;