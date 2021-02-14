
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .engine('html', require('ejs').renderFile)
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));