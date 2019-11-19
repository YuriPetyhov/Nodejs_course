const serverPort = 8800
const path = require('path')
const express = require('express')

const shop = require("./routers/shop")

const rootDir = require('./util/path')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/', shop )



app.listen(serverPort, (err) => {
    if(err) {
        console.log('server drop')
    } else {
     console.log(`server up on ${serverPort}`)
    }
})
