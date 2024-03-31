const bookSearchResultEl = document.querySelector('.book-search-result');
const mainContentEl = document.querySelector('#main-content');

var resultData;
console.log('loaded');

/*const printResults = (resultData) => {
    console.log('Printing result card')

    const resultEl = document.createElement('div');
    resultEl.classList.add('card-body')
    console.log(resultData.id);
    resultEl.innerHTML = `<a href="/book/${resultData.id}" target="new"><em>${resultData.title}</em> by ${resultData.firstName} ${resultData.lastName}</a>`

    const resultCardEl = document.createElement('div');
    resultCardEl.classList.add('card')

    const resultOptEl = document.createElement('div');
    resultOptEl.classList.add('card');

    resultOptEl.innerHTML = `<button class="btn add-book btn-primary" id="add-button" book_id="${resultData.id}">Add</button>`;
    
    console.log(resultCardEl);

    resultCardEl.append(resultEl);
    resultOptEl.append(resultCardEl);
    bookSearchResultEl.append(resultOptEl);
    //bookSearchResultEl.append(cardGroupEl);
}*/

const searchHandler = async (event) => {
    event.preventDefault();
    console.log('searching');
    const searchVal = document.querySelector('#search-input').value.trim();
    console.log(searchVal);
    
     fetch('/api/book/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    }).then((response) => response.json()).then(
        (data) => {resultData = data;
            console.log(resultData);
                for ( i = 0; i < resultData.length; i++){
                    //bookSearchResultEl.textContent= 'Results';
                    if (resultData[i].title.includes(searchVal)){
                        //printResults(resultData[i]);
                        const resultEl = document.createElement('div');
                        resultEl.classList.add('card-body')
                        console.log(resultData[i].id);
                        resultEl.innerHTML = `<a href="/book/${resultData[i].id}" target="new"><em>${resultData[i].title}</em> by ${resultData[i].firstName} ${resultData[i].lastName}</a>`
                        mainContentEl.append(resultEl);
                    }
                }
                });
};



document.querySelector('.book-search').addEventListener('submit', searchHandler);