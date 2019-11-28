const rootPath = require('../util/path')
const path = require('path')
const User = require('../models/user')
exports.addUser = (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'userForm.html'))
}

exports.saveUser = (req, res) => {

  const {name, email} = req.body
  const user = new User({
      name: name,
      email: email,
    cart: {
        items: []
    }
  })
  user
    .save()
    .then(res => 'user was sved')
}

