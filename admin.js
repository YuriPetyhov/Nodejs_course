const express = require('express')
const path = require('path')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'))
})
Router.get('/users', (req, res) => {
  res.send(`<ul><li>User</li></ul>`)
})

Router.post('/create-user', (req, res) => {
  console.log(req.body.name)
  res.end()
})

module.exports = Router
