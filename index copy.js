const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// amaJhonDB
// mOSU4JK5mZhr5IWZ



app.get('/', (req, res) => {
    res.send('jhon is busy shopping');
})

app.listen(port, () => {
    console.log('amazon server is running on port: ', port)
})