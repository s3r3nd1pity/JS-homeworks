let form = document.forms.userForm;
let submitButton = document.getElementById('submitButton');
submitButton.onclick = function (event) {
    event.preventDefault();
    let userName= form.name.value;
    let userSurname= form.surname.value;
    let userAge= form.age.value;
    let data={userName,userSurname,userAge};
    console.log(data);
    let yourData=document.createElement('div');
    document.body.appendChild(yourData);
    yourData.innerText=`Your name :${userName}, your surname :${userSurname}, your age:${userAge}`;
};