const parse = require('csv-parse');
const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
 
var csvData = [];

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
        
            console.log(csvData[0].title);

        for (i=0; i < csvData.length; i++){
            app.post('/api/book', ({csvData}, res) => {
                const sql = `INSERT INTO book(olid, oclc, title, first_name, last_name, pages, year, genre, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
                const params = [csvData[i].olid, csvData[i].oclc, csvData[i].title, csvData[i].first_name, csvData[i].last_name, csvData[i].pages, csvData[i].year, csvData[i].genre, csvData[i].descr];
            
                pool.query(sql, params, (err, result) => {
                    if (err) {
                        res.status(400).json({ error: err.message});
                        return
                    }
                        res.json({
                            message: 'success',
                            data: body
                        })
                })
        }
        );
        };

        /*app.post('/api/book', ({csvData}, res) => {
            const sql = `INSERT INTO book (olid, oclc, title, first_name, last_name, pages, year, genre, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
            const params = [csvData.olid, csvData.oclc, csvData.title, csvData.first_name, csvData.last_name, csvData.pages, csvData.year, csvData.genre, csvData.descr];
        
            pool.query(sql, params, (err, result) => {
                if (err) {
                    res.status(400).json({ error: err.message});
                    return
                }
                    res.json({
                        message: 'success',
                        data: body
                    })
            })
    }
    );*/
});

// connect pool to postgres

/*const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost', 
        database: process.env.DB_NAME
    }, 

    console.log('Connected to db')
);

pool.connect();*/

//add data to postgres

//console.log(csvData);

/*app.post('/api/book', ({body}, res) => {
    const sql = `INSERT INTO book (olid, oclc, title, first_name, last_name, pages, year, genre, descr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    const params = [body.olid, body.oclc, body.title, body.first_name, body.last_name, body.pages, body.year, body.genre, body.descr];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return
        }
            res.json({
                message: 'success',
                data: body
            });*/
