const bookSearchFormEl = document.querySelector('#book-search');
const bookSearchResultEl = document.querySelector('#book-search-result');

const handleSearchFormSubmit = async (event) => {
    event.preventDefault();

    const searchVal = document.querySelector('#search-input').value.trim();

    if (!searchVal) {
        console.error('Please enter a search value');
        return;
    }

    if (searchVal){
        const response = await fetch('api/book', {
            method: 'GET',
            body: JSON.stringify({title, first_name, last_name}),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function(response){ console.log(response.json())});

        if (response.ok) {
            const resultCard = document.createElement('div');
            Results
          } else {
            alert('no Books found');
            //document.location.replace('/profile')
          }
    }

}

bookSearchFormEl.addEventListener('submit', handleSearchFormSubmit);