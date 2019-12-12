const express = require("express")
// const dotenv = require('dotenv')

// dotenv.config()
// setup in the index.js under 'scripts'

const app = express()
const host = process.env.HOST || "127.0.0.1" // || = 'or'
const port = process.env.PORT || 8080

app.use((req, res, next) => {
	const actualIp = req.get('x-forwarded-for') || req.ip
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		// used for secrets (api key) only exposed to my environment
		cohort: process.env.LAMBDA_COHORT,
		secret: process.env.SUPER_SECRET_API_KEY
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})