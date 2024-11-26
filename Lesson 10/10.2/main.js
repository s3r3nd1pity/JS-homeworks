let age = document.getElementById('age');
let button = document.getElementById('button');
button.onclick=function () {
    let message = document.createElement("p");
    if (age.value >=18){
        message.innerText='Age confirmed'
    }
    else {
        message.innerText='You are too small'
    }
document.body.appendChild(message);
};