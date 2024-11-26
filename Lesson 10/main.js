let data = [];
for (let i = 1; i <= 100; i++) {
    data.push({id: i, name: `Lorem ${i}`})
}
let currentPage = 1
let numberOfObjects = 10
let container = document.getElementById('container')
let prevButton = document.getElementById('prevButton')
let nextButton = document.getElementById('nextButton')

function pageCreator(page) {
    let start = (page - 1) * numberOfObjects
    let end = start + numberOfObjects
    container.innerHTML=''
    for (let i = start; i < end && i < data.length; i++) {
        let div = document.createElement('div')
        div.innerText = `${data[i].id}, ${data[i].name}`
        container.appendChild(div)
    }
}

prevButton.onclick = function () {
    if (currentPage > 1) {
        currentPage--
        pageCreator(currentPage)
    }
}
nextButton.onclick = function () {
    if (currentPage * numberOfObjects < data.length) {
        currentPage++
        pageCreator(currentPage)
    }
}
pageCreator(currentPage)