const serverPort = 8800
const path = require('path')
const express = require('express')
const admin = require("./admin")
const rootDir = require('./util/path')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', admin )
app.use((req, res, next) => {
  res.status(404).sendfile(path.join(rootDir, 'view', '404.html' ))
})
app.listen(serverPort, (err) => {
    if(err) {
        console.log('server drop')
    } else {
     console.log(`server up on ${serverPort}`)
    }
})
