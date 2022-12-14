function myFunction() {
    let keyInpit1 = localStorage.getItem('keyInput1');
    let keyInpit2 = localStorage.getItem('keyInput2');
    if (keyInpit1 && keyInpit2) {
        useRequest('https://picsum.photos/v2/list?page=' + keyInpit1 + '&limit=' + keyInpit2 + '', displayResult);
    }
}

window.onload = myFunction();

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };
    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    xhr.send();
};

const result = document.querySelector('.result');
const button = document.querySelector('.out');

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `<div class="box"><img src="${item.download_url}" class="box-img"/><p>${item.author}</p></div>`;
        cards = cards + cardBlock;
    });
    result.innerHTML = cards;
}

button.addEventListener('click', () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    if (input1 >= 1 && input1 <= 10) {
        if (input2 >= 1 && input2 <= 10) {
            useRequest('https://picsum.photos/v2/list?page=' + input1 + '&limit=' + input2 + '', displayResult);
            localStorage.setItem('keyInput1', input1);
            localStorage.setItem('keyInput2', input2) 
        } else {
            alert('Лимит вне диапазона от 1 до 10');
        }
    } else {
        if (input2 >= 1 && input2 <= 10) {
            alert('Номер страницы вне диапазона от 1 до 10');
        } else {
            alert('Номер страницы и лимит вне диапазона от 1 до 10');
        }
        
    }
})