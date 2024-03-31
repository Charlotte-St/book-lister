const {FuzzySearch} = require('../../js/FuzzySearch.js');


const books = [{
    id: 2,
    title: 'Love in the Time of Cholera',
    first_name: 'Gabriel',
    last_name: 'Garcia Marquez'
}];

const searcher = new FuzzySearch (books, ['title', 'first_name'],{
    caseSensitive: false
});

const result = searcher.search('love');

console.log(result);

module.exports = FuzzySearch;