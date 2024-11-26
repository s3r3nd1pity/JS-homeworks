let Creator = document.forms.Creator;
Creator.onsubmit = function (event) {
    event.preventDefault();

    let numberOfRows = +Creator.numberOfRows.value;
    let numberOfCells = +Creator.numberOfCells.value;
    let cellContents = Creator.cellContents.value;
    for (let i = 0; i < numberOfRows; i++) {
        let rows = document.createElement('div');
        for (let j = 0; j < numberOfCells; j++) {
            let cells = document.createElement('span');
            cells.innerText=cellContents + ' ';
            rows.appendChild(cells);
        }
        document.body.appendChild(rows);
    }

};

