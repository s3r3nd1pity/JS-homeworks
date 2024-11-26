let numberText=document.getElementById('number');
let currentNumber= +localStorage.getItem('number');
currentNumber = currentNumber+1;
localStorage.setItem('number', currentNumber);
numberText.innerText=currentNumber;
