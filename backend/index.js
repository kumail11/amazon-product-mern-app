const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "yaalimadad110",
    database: "practicedb"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM amazon_products";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});


app.listen(3001, () => {
    console.log('Running on port 3001..!!');
});