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

    row.id = table.children.length

    var secondToLastCellInRow = row.insertCell(cellArr.length)
    secondToLastCellInRow.innerHTML = `<td><button onclick='editRow(${table.children.length - 1})' id=${table.children.length - 1}>Redigera</button></td>`
    var lastCellInRow = row.insertCell(cellArr.length + 1)
    lastCellInRow.innerHTML =
        `<td><button onclick='deleteRow(${table.children.length - 1})' id=${table.children.length - 1}> Radera</button ></td >`

}

const deleteRow = (e) => {
    document.getElementById("weahead-table").deleteRow(e)
}

const editRow = (e) => {

    console.log(e)

    var row = document.getElementById(e)

    console.log(row.children)

    const cellArr = [
        "project",
        "activity",
        "from",
        "to",
        "note",
    ]


    //loop through element and match each cell with corresponding element in submitform

}