const randomListEl = document.querySelector('#random-list');

//Get length of list table, then get random indexes in table, then append cards to the homepage
const getListLength = async () => {

     fetch('/api/list/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    }).then((response) => response.json()).then(
        (data) => {
            resultData = data;
            var index = [];
            for (var i = 0; i < 3; i++){
            var num = Math.floor(Math.random() * resultData.length);
                printCards(resultData);

            }
                });
};

function printCards(resultData) {
    const randomCardEl = document.createElement('div');
    randomCardEl.classList.add('col-3-sm');

    randomCardEl.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${resultData.title}</h5>
        <p class="card-text">${resultData.list_desc}</p>
        <a href="/list/${resultData.id}" class="btn btn-primary">Go to list</a>
      </div>
    </div>`
};

getListLength();
