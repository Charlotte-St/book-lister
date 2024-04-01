const fastcsv = require('fast-csv');
const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
 
var csvData = [];
var stream = fs.createReadStream('seeds/data/correctedDB-DO-NOT-DELETE.csv');

//Parse the file

let csvStream = fastcsv
    .parse()
    .on("data", function(data){
        csvData.push(data);
    })
    .on('end', function(){
        csvData.shift();

        const pool = new Pool(
            {
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                host: 'localhost', 
                database: process.env.DB_NAME
            }, 
        
        );

        const sql = `INSERT INTO book (olid, oclc, title, first_name, last_name, pages, year, genre, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

        pool.connect((err, client, done) => {
            if (err) throw err; 

            try {
                csvData.forEach(row => {
                    client.query(sql, row, (err, res) => {
                        if (err) {
                            console.log(err.stack);
                        } else {
                            console.log("inserted" + res.rowCount + " row:", row);
                        }
                    })
                })
            } finally {
                done();
            }
        })

    });

    stream.pipe(csvStream); 
