require('dotenv').load();
const express = require('express')
const router = require('./src/routes')

const app = express()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

if (process.env.ENV === 'DEV') 
    app.use(require('morgan')('dev'))

app.use('/', router)

app.listen(PORT, HOST, () => {
    if (process.env.ENV === 'DEV') 
        console.log(`http://${HOST}:${PORT}/.`);
})