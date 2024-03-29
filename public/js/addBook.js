const addBookHandler = async (event) => {
    event.preventDefault();

    const book_id = document.querySelector('book-id').value;
    const user_id = document.querySelector('user-id').value;
  
    if (book_id && user_id) {
      const response = await fetch('/api/listitem', {
        method: 'POST',
        body: JSON.stringify({ book_id, user_id }),
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


document.querySelector('.add-book').addEventListener('click', addBookHandler);