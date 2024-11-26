let kilogram = document.getElementById('kilogram');
let p = document.createElement('p');
kilogram.oninput = function () {
    let pounds = +kilogram.value * 2.2;
    p.innerText = pounds + ' ';
    document.body.appendChild(p);
};