const editListFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#list-title').value.trim();
    const listDesc = document.querySelector('#list-descr').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];


    if (title && listDesc) {
      console.log(listDesc);

      const response = await fetch(`/api/list/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, listDesc }),
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