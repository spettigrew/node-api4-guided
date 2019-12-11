const express = require("express")

const app = express()
const host = "0.0.0.0"
const port = 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})