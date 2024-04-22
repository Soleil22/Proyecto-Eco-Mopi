const e = require("express")
const express = require("express")
const app = express()
const router = require('../Mopi/src/routers/indexMopi')
const PORT = 3003

app.use(express.json())
app.use('/app', express.static("./Mopi/screens/pantallaInicial"))

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/app`)
})