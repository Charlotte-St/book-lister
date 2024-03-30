const newListFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#list-title').value.trim();
    const listDesc = document.querySelector('#list-descr').value.trim();
  
    if (title && listDesc) {
      const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ title, listDesc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create a list');
      }
    }
};

document.querySelector('.new-list-form').addEventListener('submit', newListFormHandler);