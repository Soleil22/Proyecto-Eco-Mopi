const e = require("express")
const express = require("express")
const app = express()
const router = require('../Mopi/src/routers/mopi')
const PORT = 3003
app.use(express.json())
app.use('/app', express.static("mopi"))

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/app`)
})