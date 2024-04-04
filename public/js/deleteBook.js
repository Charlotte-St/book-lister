const delBookHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/listitem/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to remove this book');
      }
    }
  };
  

  document.querySelector('.del-book').addEventListener('click', delBookHandler);