const express = require('express')
const app = express()

app,use('/api/assets', express.static('\\assets'))

app.listen(3001, () => {
  console.log('Listening on 3001')
})