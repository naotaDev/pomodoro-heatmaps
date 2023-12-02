import {drawTable} from "./modules/drawTable.js"

let main = document.querySelector('.main')
let table = document.createElement('div')
table.setAttribute('class','table')
main.append(table)

drawTable(25,31)

