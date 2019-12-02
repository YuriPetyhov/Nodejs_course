const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuth: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res) => {
  User.findById('5ddfcb0d5f28574178b4858a')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect('/')
    })
    .catch(err => console.log(err));

}
