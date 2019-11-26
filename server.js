const serverPort = 8800
const path = require('path')
const express = require('express')
const page404 = require('./conttroles/error')
const shop = require("./routers/shop")
const  dbConfig = require('./dbConfig')
const rootDir = require('./util/path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/', shop )

app.use(page404.get404Page)


  mongoose.connect(dbConfig.uri)
    .then(() => {
      app.listen(dbConfig.serverPort)
      console.log(`Server up on ${dbConfig.serverPort}`)
    })
    .catch(err => console.error(err))
