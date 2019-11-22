const express = require('express')
const productsConttroles = require('../conttroles/productsConttroles')
const Router = express.Router()
const{main, addCart, saveCart} = productsConttroles
Router.get('', main)

Router.get('/addCart', addCart)

Router.post('/saveCart', saveCart)

module.exports = Router
