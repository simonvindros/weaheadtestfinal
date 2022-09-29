const createRow = () => {

    var table = document.getElementById("weahead-table")
    var row = table.insertRow()


    const cellArr = [
        "project",
        "activity",
        "from",
        "to",
        "note",
    ]

    cellArr.map((cell, i) => {
        let e
        e = document.getElementsByName(cell)
        if (e[0].localName === "select") {
            e = document.getElementsByName(cell)[0][0].innerText
        } else {
            e = document.getElementsByName(cell)[0].value
        }

        var currCell = row.insertCell(i)
        currCell.innerHTML = e
    })

    var secondToLastCellInRow = row.insertCell(cellArr.length)
    secondToLastCellInRow.innerHTML =
        `<td><button onclick='editRow()'>Redigera</button></td>`

    var lastCellInRow = row.insertCell(cellArr.length + 1)
    lastCellInRow.innerHTML =
        `<td><button onclick='deleteRow()'> Radera</button ></td >`

}

const deleteRow = () => {
    var index, table = document.getElementById('weahead-table')

    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[6].onclick = function () {
            index = this.parentElement.rowIndex - 1
            table.deleteRow(index)
        }
    }
}

const editRow = () => {
    var row = document.getElementById(e)

    const cellArr = [
        "project",
        "activity",
        "from",
        "to",
        "note",
    ]


    //loop through element and match each cell with corresponding element in submitform
    //like in deleteRow()

}