function f() {
    let user = localStorage.getItem('user');
    let dt = localStorage.getItem('date');
    if (user && dt) {
        alert('Добрый день, ' + user + '! Давно не виделись. В последний раз вы были у нас ' + dt.toLocaleString());
        dt = new Date();
        localStorage.setItem('date', dt.toLocaleString())
    } else {
        user = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
        dt = new Date();
        localStorage.setItem('user', user);
        localStorage.setItem('date', dt.toLocaleString())
    }
}

f();