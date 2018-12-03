require('dotenv').load();
const express = require('express')
const routes = require('./routes')
const chalk = require ('chalk');

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use('/', routes)

const server = app.listen(PORT, HOST, () => {
    console.log(chalk.green(' [*] App: Start Succeeded.'));
    console.log(chalk.green(` [*] Host: http://${HOST}:${PORT}/.`));
});

module.exports = server;