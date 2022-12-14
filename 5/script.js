const btn = document.querySelector('.out');

btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;

    fetch('https://jsonplaceholder.typicode.com/users/' + input + '/todos')

        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((data) => {
            if (Object.keys(data).length == 0) {
                reject("Пользователь с указанным id не найден")
            } else {
              console.log(data);
                let countData = data.length;
                document.write('<section><ul class="ul">');
                for (let i = 0; i < countData; i++) {
                    let userId = data[i].userId;
                    let id = data[i].id;
                    let title = data[i].title;
                    let completed = data[i].completed;
                    document.write('<li>"userId": ' + userId + '</li>');
                    document.write('<li>"id": ' + id + '</li>');
                    (completed == true) ? document.write('<li>"title": <s>' + title + '</s></li>') : document.write('<li>"title": ' + title + '</li>');
                    document.write('<li>"completed": ' + completed + '</li>');
                    document.write('<br>');
                }
                document.write('</ul></section>');
            }
        })
        .catch(() => {
            alert("Пользователь с указанным id не найден")
        });
});