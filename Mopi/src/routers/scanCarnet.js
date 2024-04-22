const express = require('express');
const router = express.Router();

router.get('/carnet', (req, res) => {
    res.send("lol q mal")
})

router.post('/user', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

module.exports = router;