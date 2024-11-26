let sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
for (const sessionsListElement of sessionsList) {
let session =     document.createElement('div');
session.innerText= sessionsListElement;
document.body.appendChild(session);
}