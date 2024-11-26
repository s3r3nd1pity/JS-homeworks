let wrapper = document.getElementById('wrapper');
let firstPrice = 90;
let priceToAdd=10;
let delay = 10000;
let lastSession = localStorage.getItem('lastSession');
let currentTime = Date.now();
if (!lastSession || currentTime-lastSession > delay){
    let currentPrice=JSON.parse(localStorage.getItem('currentPrice')) || firstPrice;
    currentPrice +=priceToAdd;
    wrapper.innerText = currentPrice + 'UAN';
    localStorage.setItem('currentPrice', JSON.stringify(currentPrice));
localStorage.setItem('lastSession', JSON.stringify(currentTime));
}
else {
    wrapper.innerText = JSON.parse(localStorage.getItem('currentPrice')) + 'UAN' || firstPrice +'UAN';
}