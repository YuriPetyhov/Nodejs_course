const http = require("http");

const  server = http.createServer((req, res) => {

if(req.url === '/') {
  res.write('<html>')
  res.write('<head>  <meta charset="utf-8"><title>First Page</title></head>')
  res.write('<body><h1>Главная</h1><a href="/two"> перейти</a></body>')
  res.write('</html>')
  res.end()
} else {
  res.setHeader('Content-type', 'text/html')
  res.write('<html>')
  res.write('<head>  <meta charset="utf-8"><title>First Page</title></head>')
  res.write('<body> <h1>Тут я сейчас</h1></body>')
  res.write('</html>')
  res.end()
}

})

server.listen('8800', (err) => {
  if(err) {
    console.error("Server drop ")
  } else {
    console.log('Server up on 8800')
  }
})

