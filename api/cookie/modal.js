'use strict';
var modal = document.getElementById('myModal');

let [close, no] = document.getElementsByClassName('close');
let [yes] = document.getElementsByClassName('yes');

close.onclick = function () {
    modal.style.display = 'none';
};

no.onclick = function () {
    modal.style.display = 'none';
};

yes.onclick = function () {
    storeCookie('cookieMonsterrr', 'OMNONOMONOMONOMNOM');
    document.getElementById('cookiediv').innerHTML = '<ul>'
        + document.cookie.split('; ')
            .map((cookie) => {
                return `<li class="lol">${cookie}</li>`;
            }).join('') + '</ul>';
    modal.style.display = 'none';
};

let storeCookie = (cookieName, cookieValue) => {
    document.cookie = `${cookieName}=${cookieValue}; expires=`;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

modal.style.display = 'block';