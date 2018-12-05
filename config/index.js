require('dotenv').load()

const path = require('path')
const ENV = process.env.ENV || 'dev'

const envConfig = require(path.join(__dirname, '.', ENV))

const config = Object.assign({
	[ENV]: true,
	env: ENV,
}, envConfig)

module.exports = config
