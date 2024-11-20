let div = document.createElement('div')
let p = document.createElement('p')
p.innerText='lorem'
div.appendChild(p)
div.classList.add('wrap', 'collapse', 'alpha','beta')
div.style.background='black'
div.style.color='white'
div.style.fontSize = '50px'
 document.body.appendChild(div)
let clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);
console.log(clonedDiv===div)