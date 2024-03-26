const parse = require('csv-parse');
const fs = require('fs');

const csvData = [];

fs.createReadStream('seeds/data/bookdb.csv')
    .pipe(
        parse({
            delimiter: ','
        })
    )
    .on('data', function(row){
        csvData.push(row);
    })
    .on('end', function(){
        console.log(csvData)
    })