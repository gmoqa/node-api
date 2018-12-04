require('dotenv').load();
const express = require('express')
const router = require('./router')

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use('/', router)

const server = app.listen(PORT, HOST, () => {
    console.log(' [*] App: Start Succeeded.');
    console.log(` [*] Host: http://${HOST}:${PORT}/.`);
});

module.exports = server;