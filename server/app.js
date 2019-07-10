const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
let allList = Array.from({length: 30}, (v, i) => ({
  id: i,
  name: '视频' + i,
  isCollect: false
}))
// 后台设置允许跨域访问
// 前后端都是本地localhost，所以不需要设置cors跨域，如果是部署在服务器上，则需要设置
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/api/getVideoList', function (req, res) {
  let query = req.query
  let currentPage = query.currentPage
  let pageSize = query.pageSize
  let list = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  res.json({
    code: 0,
    data: {
      list,
      total: allList.length
    }
  })
})
app.get('/api/getVideoDetail/:id', function (req, res) {
  let id = Number(req.params.id)
  let info = allList.find(v => v.id === id)
  res.json({
    code: 0,
    data: info
  })
})
app.post('/api/collectVideo', function (req, res) {
  let id = Number(req.body.id)
  let isCollect = req.body.isCollect
  allList = allList.map((v, i) => {
    return v.id === id ? {...v, isCollect} : v
  })
  res.json({code: 0})
})
const PORT = 3003
app.listen(PORT, function () {
  console.log('app is listening port' + PORT)
})
