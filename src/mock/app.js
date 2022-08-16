const express = require('express')
// 创建网站服务器
const app = express()

const bodyParser = require('body-parser')
// 解析application/json数据
const jsonParser = bodyParser.json()
// 解析application/x-www-form-urlencoded数据
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// const jwt = require('jsonwebtoken')
const url = require('url')

const adminLogin = require('./data/login/admin_login.json')
const userLogin = require('./data/login/user_login.json')
const adminMenu = require('./data/menu/admin_menu.json')
const userMenu = require('./data/menu/user_menu.json')

app.get('/', (req, res) => {
  res.send('hello express')
})

// let data = ''
// let msg = 'CASEY'
// let token = ''

// req.on('data', chunk => {
//   data += chunk
// })

// req.on('end', () => {
//   data = decodeURI(data)

//   token = jwt.sign(data, msg)

//   res.send({ code: 200, message: '登录成功', token })
// })
app.post('/login', jsonParser, (req, res) => {
  const identity = req.body.username

  if (identity === 'admin') {
    res.send(adminLogin)
  } else {
    res.send(userLogin)
  }
})

app.get('/permission', jsonParser, (req, res) => {
  const user = req.headers.authorization

  if (user === 'admin') {
    res.send(adminMenu)
  } else {
    res.send(userMenu)
  }
})

app.listen(3001, () => {
  console.log('express start at port 3001....')
})
