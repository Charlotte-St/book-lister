var index;

const getListLength = async () => {

     fetch('/api/list/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        plain: true
        }
    }).then((response) => response.json()).then(
        (data) => {resultData = data;
            console.log(resultData.length);
            index = resultData.length
                });
};

getListLength();

console.log(index);