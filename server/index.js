let express = require('express')
let bp = require('body-parser')
require('./db/db-config')
let server = express();
let port = 3000
let cors = require('cors')

server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded(({
  extended: true
})))
server.use(express.static(__dirname + '/../www/'))


//ROUTES
let songRoutes = require('./routes/Songs')


server.use('/api/songs', songRoutes)




//Error Handlers
server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err)
})
server.use('*', (req, res, next) => {
  res.status(404).send('<h1>404</h1>')
})




server.listen(port, () => {
  console.log('Hellllllloooo', port)
})