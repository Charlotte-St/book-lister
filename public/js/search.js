console.log('loaded');

const searchHandler = async (event) => {
    event.preventDefault();
    console.log('Search')

    const searchVal = document.querySelector('#search-input').value.trim();
    
    console.log(searchVal);

    const response = await fetch('/api/book', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    });
    console.log('Search');
    if (response.ok) {
        const arr = response.json();
        console.log(arr);
        console.log(arr[0]);
      } else {
        alert('no Books found');
        console.log('issue')
      }
};

document.querySelector('.book-search').addEventListener('submit', searchHandler);