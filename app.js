require('dotenv').load();
const express = require('express')
const router = require('./src/routes')
const config = require('./config')

const app = express()

const PORT = config.port
const HOST = config.host

if (process.env.ENV === 'dev') 
    app.use(require('morgan')('dev'))

app.use('/', router)

app.listen(PORT, HOST, () => {
    if (process.env.ENV === 'dev') 
        console.log(`http://${PORT}:${HOST}/.`);
})