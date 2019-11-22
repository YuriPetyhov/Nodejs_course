const rootPath = require('../util/path')
const path = require('path')
const Products = require('../models/productsModel')

exports.main =  (req, res) => {
  Products.fetchAll().then(d =>  res.render('shop', {prods:d}))
}

exports.addCart =  (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'addCard.html'))
}

exports.saveCart = (req, res) => {
   const products = new Products(req.body.name)
  products.save()
  res.redirect('/')
}
