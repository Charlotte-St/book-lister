console.log('loaded');

const searchHandler = async (event) => {
    event.preventDefault();
    console.log('Search')

    const searchVal = document.querySelector('#search-input').value.trim();
    
    console.log(searchVal);

    /*const response = await*/ fetch('/api/book', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    }).then((response) => response.json()).then((data) => {console.log(data)});
};

document.querySelector('.book-search').addEventListener('submit', searchHandler);