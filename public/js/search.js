console.log('loaded');

const searchHandler = async (event) => {
    event.preventDefault();
    console.log('Search')
};

document.querySelector('.book-search').addEventListener('submit', searchHandler);