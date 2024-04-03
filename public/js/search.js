const bookSearchResultEl = document.querySelector('.book-search-result');
const mainContentEl = document.querySelector('#main-content');
const scriptEl = document.querySelector('#script-div');

var resultData;


//Add book to list
const addBookHandler = async (event) => {


    const bookId = event.target.value;
    const listId = window.location.toString().split('/')[window.location.toString().split('/').length-1].replace('?', '');
  

    if (bookId && listId) {
      const response = await fetch('/api/listitem', {
        method: 'POST',
        body: JSON.stringify({ bookId, listId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        window.location.assign(`/list/${listId}`);
      } else {
        alert('Failed to add book');
      }
    }
};

  document.getElementById('add-button').addEventListener('click', addBookHandler);
