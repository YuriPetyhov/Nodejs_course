exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404', isAuth: req.get('Cookie').split(';')[1].trim().split('=')[1] });
};
