const updateBtnEl = document.querySelector('#owner-buttons');
const deleteFooterEl = document.querySelector('#delete-footer');
const scriptEl = document.querySelector('#script-div');

const session_user_id = document.querySelector('#list-card').getAttribute('list-user');
const owner_user_id = document.querySelector('#list-card').getAttribute('list-owner');
const list_item_id = document.querySelector('#book-card-id').getAttribute('list-item-id');

const listId = window.location.toString().split('/')[window.location.toString().split('/').length-1].replace('?', '');


console.log(session_user_id);

const listOwnerBtnHandler = () => {
    if (session_user_id == owner_user_id){


        updateBtnEl.innerHTML = `<div type="card-body" id="update-controls">
        <a href="/addbook/${listId}">
            <button class="btn btn-primary">Add a book</button>
        </a>
        <a href="/edit/${listId}">
            <button class="btn btn-primary">Edit list</button>
        </a>
        </div>`;

        const updateControlEl = document.querySelector('#update-controls');

        const deleteListBtnEl = document.createElement('button');
        deleteListBtnEl.classList.add('btn', 'btn-danger', 'del-list');
        deleteListBtnEl.setAttribute('data-id', `${listId}`);
        deleteListBtnEl.innerText='Delete List';

        updateControlEl.append(deleteListBtnEl);

        //`<button class="btn btn-danger del-list" data-id="${listId}">Delete list</button>
        //</br></br>`

        const cardFooterEl = document.createElement('div');
        cardFooterEl.classList.add('card-footer');

        const cardFooterBtnEl = document.createElement('button');
        cardFooterBtnEl.classList.add('btn', 'btn-primary', 'del-book');
        cardFooterBtnEl.setAttribute('data-id', `${list_item_id}`);
        cardFooterBtnEl.innerText = 'Delete';

        deleteFooterEl.append(cardFooterEl);
        cardFooterEl.append(cardFooterBtnEl);

    
   scriptEl.innerHTML = ` 
        <script src="../js/deleteList.js"></script>
        <script src="../js/deleteBook.js"></script>
    `

    } else {
        updateBtnEl.innerHTML= '';
    }
}

listOwnerBtnHandler();


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