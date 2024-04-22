const express = require('express');
const router = express.Router();


 
router.get('/BOOKS', (req, res) => {
    res.send("libros")
})

router.post('/user', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

module.exports = router;