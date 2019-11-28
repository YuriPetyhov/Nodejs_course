const express = require('express')
const{addUser, saveUser} = require('../conttroles/usersConttroles')
const Router = express.Router()

Router.get('/addUser', addUser)
Router.post('/addUser', saveUser)

module.exports = Router
