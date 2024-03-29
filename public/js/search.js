const bookSearchResultEl = document.querySelector('#book-search-result');
var resultData;
console.log('loaded');

const printResults = (resultData) => {
    const cardGroupEl = document.createElement('div');
    cardGroupEl.classList.add('card-group');

    const resultCardEl = document.createElement('div');
    resultCardEl.classList.add('card')

    const resultEl = document.createElement('div');
    resultEl.classList.add('card-body')

    resultEl.innerHTML = `<a href="/book/${resultData.id}" target="new"><em>${resultData.title}</em> by ${resultData.first_name} ${resultData.last_name}</a>`

    const resultOptEl = document.createElement('div');
    resultOptEl.classList.add('card');

    resultOptEl.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    resultCardEl.append(resultEl);
    cardGroupEl.append(resultCardEl);
    cardGroupEl.append(resultOptEl);
    bookSearchResultEl.append(cardGroupEl);
}

const searchHandler = async (event) => {
    event.preventDefault();
    console.log('Search')

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
             console.log(resultData[0].title);
                for ( i = 0; i < resultData.length; i++){
                    bookSearchResultEl.textContent= '';
                    if (resultData[i].title.includes(searchVal)){
                        printResults(resultData[i]);
                    }
                }
                });/*.then(
            (result) => {
                console.log(result)
    })*/;
};



document.querySelector('.book-search').addEventListener('submit', searchHandler);