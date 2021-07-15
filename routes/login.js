const express = require('express')
const router = express.Router()

const userList = require('../models/user')

router.get('/', (req, res) => {
  const { email, password } = req.signedCookies

  if (email === "" || password === "") {
    res.render('index')
  }

  userList.find({ email, password })
    .lean()
    .then(user => {
      if (user.length === 1) {
        res.render('welcome', { name: user[0].firstName })
      } else {
        res.render('index')
      }
    })
    .catch(error => console.log(error))
})

router.post('/index', (req, res) => {
  const { email, password } = req.body

  userList.find({ email, password })
    .lean()
    .then(function (user) {
      if (user.length === 1) {
        res.cookie('email', email, { path: '/', signed: true, maxAge: 600000 });
        res.cookie('password', password, { path: '/', signed: true, maxAge: 600000 });
        res.redirect('/')
      } else {
        res.render('index', { email, fail: true })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router