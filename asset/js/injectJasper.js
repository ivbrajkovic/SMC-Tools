// injectJasper.js
//
// Get data from Jasper
//
(() => {
	let obj = {};
	let rows = document.querySelector('#reportContainer table').rows;

	for (let i = 4, l = rows.length; i < l; i++) {
		let row = rows[i];

		for (let i = 0, l = row.cells.length; i < l; i++) {
			let cell = row.cells[i];
			// console.log(row.cells[i].style.backgroundColor);
			if (cell.style.backgroundColor === 'rgb(204, 204, 204)' && cell.hasChildNodes()) {
				obj[cell.firstElementChild.innerText.replace(/(\r\n|\n|\r)/gm, ' ')] = row.cells[++i]
					.firstElementChild
					? row.cells[i].firstElementChild.innerText
					: '';
			}
		}
	}

	console.log(obj);
	//return obj;
	// return JSON.stringify(obj);

	chrome.storage.sync.set({ data: obj });
})();
