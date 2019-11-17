const serverPort = 8800
const http = require("http");
const routes = require("./routers")

const server = http.createServer(routes)

server.listen(serverPort, (err) => {
    if(err) {
        console.log('server drop')
    } else {
     console.log(`server up on ${serverPort}`)
    }
})
