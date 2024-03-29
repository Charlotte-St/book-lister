//const bookSearchFormEl = document.querySelector('#book-search');
const bookSearchResultEl = document.querySelector('#book-search-result');

console.log('Loaded');

const handleSearchFormSubmit = async (event) => {
    /*event.preventDefault();*/
    console.log('searching');
    const searchVal = document.querySelector('#search-input').value.trim();
    
    console.log(searchVal);
    
    /*if (!searchVal) {
        console.error('Please enter a search value');
        return;
    }*/

      /*  const response = await fetch('/api/book', {
            method: 'GET',
            body: JSON.stringify({title, first_name, last_name}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Search');
        if (response.ok) {
            console.log(response);
          } else {
            alert('no Books found');
            console.log('issue')
          }*/

}

document.getElementById('search-button').addEventListener('submit', handleSearchFormSubmit);
//document.querySelector('.book-search').addEventListener('submit', handleSearchFormSubmit);