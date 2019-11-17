const fs = require('fs')

const routers = (req, res) => {
    res.write('<html>')
    res.write('<head>\n' +
        '  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n' +
        '  <title>Пример веб-страницы</title>\n' +
        ' </head>')
    res.write('<body>')
    if(req.url === '/') {
        res.write(`<form action='/create-user' method="POST"> 
               <input name="user" type="text">
               <button>Create new</button>
            </form>`)
        res.end()
    }
    if(req.url === 'users') {
        res.write('<ul><li>Users1</li>></ul>')
        res.end()
    }

    if(req.url === '/create-user') {
        const body = []
        req.on('data', (d) => {
            body.push(d)
        })
        req.on('end', () => {
            const parserBody = Buffer.concat(body).toString().split('=')[1]
            res.end(parserBody)
        })

    }


}
module.exports= routers
