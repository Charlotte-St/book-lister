const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();


app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Connect to pool

const pool = new Pool(
   {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost', 
    database: process.env.DB_NAME
   }
)

pool.connect();

//Get count of lists

var listCount;

app.get('/api/book', (req, res) => {
    const sql = 'SELECT COUNT(*) FROM book';

    pool.query(sql, (err, res) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.status(200).json();
        console.log(res.json());
        listCount = res.json();
    })
})


//get random list indexes
function getRandomIndex(data) {  

    for (var i = 0; i < 10; i++){

    var num = Math.floor(Math.random() * data);
    cityCodes.push(num);
    }
}
