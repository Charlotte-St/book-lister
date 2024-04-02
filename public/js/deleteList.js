console.log('Running Delete List');

const delListHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/list/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete the list');
      }
    }
  };
  

  document.querySelector('.del-list').addEventListener('click', delListHandler);