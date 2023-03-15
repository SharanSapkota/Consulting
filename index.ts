const express   = require('express');
const app       = express()
const routes    = require('./routes/index.ts')

app.use(express.json())

app.use('/', routes)

app.listen(8000, () => {
    console.log("server started at port 8000")
}) 

export {}