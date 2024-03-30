const editListFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#list-title').value.trim();
    const list_desc = document.querySelector('#list-descr').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    console.log(id);

    if (title && list_desc) {
      const response = await fetch(`/api/list/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, list_desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/list/${id}`);
      } else {
        alert('Failed to update the list');
      }
    }
};

document.querySelector('.edit-list-form').addEventListener('submit', editListFormHandler);