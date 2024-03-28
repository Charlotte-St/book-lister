const newListFormHandler = async (event) => {
    event.preventDefault();
    
    /* const title = document.querySelector('#list-title').value.trim();
    const list_desc = document.querySelector('#list-descr').value.trim();

console.log(title);
console.log(list_desc);

    if (title && list_desc) {
        const response = await fetch('/api/list', {
            method: 'POST',
            body: JSON.stringify({title, list_desc}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create list')
        }
    }*/

    const title = document.querySelector('#list-title').value.trim();
    const list_desc = document.querySelector('#list-descr').value.trim();
  
    if (title && list_desc) {
      const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ title, list_desc }),
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