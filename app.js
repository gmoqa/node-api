require('dotenv').load()
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

const router = require('./src/routes')
const config = require('./config')

const PORT = config.port
const HOST = config.host

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

if (process.env.ENV === 'dev') {
	app.use(require('morgan')('dev'))
	app.use(errorHandler())
}

if (process.env.ENV === 'prod') {
	app.use(require('express-status-monitor')())
	app.use(compression())
}

app.use('/', router)

app.listen(PORT, HOST, () => {
	if (process.env.ENV === 'dev') {
		console.log(`http://${PORT}:${HOST}`)
	}
})
