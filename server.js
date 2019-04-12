const express = require('express');

const app = express()

const PORT = process.env.PORT || 8989

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.listen(PORT)