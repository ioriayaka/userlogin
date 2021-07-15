const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const routes = require('./routes/login')
const app = express()
const port = 3000
require('./config/mongoose')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('123456789'))

app.use(routes)

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}.`)
})
