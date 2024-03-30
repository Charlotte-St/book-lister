const parse = require('csv-parse');
const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();
 
const csvData = [];

//Parse the file

fs.createReadStream('seeds/data/correctedDB-DO-NOT-DELETE.csv')
    .pipe(
        parse({
            delimiter: ',', columns: true
        })
    )
    .on('data', function(row){
        csvData.push(row);
    })
    .on('end', function(){
        console.log(csvData)
    });

// connect pool to postgres

const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost', 
        database: process.env.DB_NAME
    }, 

    console.log('Connected to db')
);

pool.connect();

//add data to postgres