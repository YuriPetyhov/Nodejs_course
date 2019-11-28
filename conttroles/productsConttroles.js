const rootPath = require('../util/path')
const path = require('path')
const Product = require('../models/productsModel')

exports.main =  (req, res) => {
  Product.find().then(d =>  res.render('shop', {prods:d}))
}

exports.addCart =  (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'addCard.html'))
}

exports.saveCart = (req, res) => {
  console.log(req.user)
  const {title, price, description, imageUrl} = req.body
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(res => console.log('PRODUCT WAS ADDED'))
  res.redirect('/')
}
