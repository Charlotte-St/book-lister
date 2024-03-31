const bookSearchResultEl = document.querySelector('.book-search-result');
const mainContentEl = document.querySelector('#main-content');
const scriptEl = document.querySelector('#script-div');

var resultData;

console.log('Add book running')

const addBookHandler = async () => {

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
        console.log('Failure');
      }
    }
};

const el = document.getElementById('add-button');
if (el){
  document.getElementById('add-button').addEventListener('click', addBookHandler);
};



const searchHandler = async (event) => {
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
            //scriptEl.innerHTML = '<script src="../js/addBook.js"></script>';

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
                        addButtonEl.setAttribute('book_id', `${resultData[i].id}`);
                        addButtonEl.addEventListener('click', addBookHandler);

                        resultCardEl.innerHTML = `<a href="/book/${resultData[i].id}" target="new">
                        <em>${resultData[i].title}</em> by ${resultData[i].firstName} ${resultData[i].lastName}</a>`;

                        resultCardEl.append(addButtonEl);

                        /*resultEl.innerHTML = ` <div class="card">
                        <div class="card-body">
                        <a href="/book/${resultData[i].id}" target="new">
                        <em>${resultData[i].title}</em> by ${resultData[i].firstName} ${resultData[i].lastName}</a>
                        <button class="btn btn-primary" id="add-button" book_id="${resultData[i].id}">Add to list</button>
                        </div>
                        </div>`*/
                        mainContentEl.append(resultEl);
                    }
                };
                });
};


document.querySelector('.book-search').addEventListener('submit', searchHandler);