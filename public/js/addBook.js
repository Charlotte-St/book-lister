console.log('Add book running')

const addBookHandler = async (event) => {
    event.preventDefault();

    console.log('Adding');

    const book_id = document.getElementById('add-button').getAttribute('book-id');
    const list_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];
  
    console.log(book_id);
    console.log(list_id);

    if (book_id && list_id) {
      const response = await fetch('/api/listitem', {
        method: 'POST',
        body: JSON.stringify({ book_id, list_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert('Failed to add book');
      }
    }
};


document.querySelector('#add-button').addEventListener('click', addBookHandler);