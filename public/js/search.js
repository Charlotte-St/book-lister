//import Fuse from 'fuse.js';
const fuse = require('fuse.js');
import books from '../db/example.json';

const fuseEx = new Fuse(books,{
    keys: [
        'title',
        'first_name',
        'last_name',
        'genre'
    ]
});

const results = fuse.search('Gabriel')

console.log(results);