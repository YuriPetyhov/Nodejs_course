const express = require('express')
const path = require('path')
const rootPath = require('../util/path')

const Router = express.Router()

const products = []

Router.get('', (req, res) => {
  res.render('shop', {prods: products})
})

Router.get('/addCart', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'addCard.html'))
})

Router.post('/addCart', (req, res) => {
    products.push({name: req.body.name})
    res.redirect('/')
})

module.exports = Router
