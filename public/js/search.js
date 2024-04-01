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



//This function + event listener temporarily live on the addBook.handlebars file
/*const searchHandler = async (event) => {
    event.preventDefault();

    const searchVal = document.querySelector('#search-input').value.trim();
    
     fetch('/api/book/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    }).then((response) => response.json()).then(
        (data) => {resultData = data;

                for ( i = 0; i < resultData.length; i++){
                    if (resultData[i].title.includes(searchVal)){
                        const resultEl = document.createElement('div');                        
                        resultEl.classList.add('card')
                        
                        const resultCardEl = document.createElement('div');
                        resultCardEl.classList.add('card-body');
                        
                        resultEl.append(resultCardEl);

                        const addButtonEl = document.createElement('button');
                        addButtonEl.classList.add('btn', 'btn-primary');
                        addButtonEl.setAttribute('id', 'add-button');
                        addButtonEl.textContent = 'Add book';
                        addButtonEl.setAttribute('value', `${resultData[i].id}`);
                        addButtonEl.addEventListener('click', addBookHandler);

                        resultCardEl.innerHTML = `<a href="/book/${resultData[i].id}" target="new">
                        <em>${resultData[i].title}</em> by ${resultData[i].firstName} ${resultData[i].lastName}</a>`;

                        resultCardEl.append(addButtonEl);

                        mainContentEl.append(resultEl);
                    }
                };
                });
};


document.querySelector('.book-search').addEventListener('submit', searchHandler);*/