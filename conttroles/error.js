const rootPath = require('../util/path')
const path = require('path')

exports.get404Page = (req, res) => {
  res.status(404).sendFile(path.join(rootPath, 'views', '404.html'))
}
