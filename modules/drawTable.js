export const drawTable = (rows,columns) => {
	let table = document.querySelector('.table')
	let cellWidth = table.scrollWidth / columns 
	let cellHeight = table.scrollHeight / rows 
	for (let e = 0; e < columns * rows; e++) {
		let cell = document.createElement('div')
		cell.setAttribute('class', `cell cell${e}`)
		cell.setAttribute('style', `height: ${cellHeight}px; width: ${cellWidth}px`)
		table.append(cell)
	}
	}


