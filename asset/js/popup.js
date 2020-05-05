let btnJasper = document.getElementById('btnJasper');
let btnBAS = document.getElementById('btnBAS');
let btnACS = document.getElementById('btnACS');

// console.log(changeColor);
// changeColor.addEventListener('click', () => {
// 	console.log('click');
// });
// chrome.storage.sync.get('color', function(data) {
// 	changeColor.style.backgroundColor = data.color;
// 	changeColor.setAttribute('value', data.color);
// });
// let obj;

// Copy data from Jasper
btnJasper.onclick = function(element) {
	// Get active tab id
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{
				// code: 'document.body.style.backgroundColor = "' + color + '";'
				file: '/asset/js/injectJasper.js'
				// code: 'var x = 10; x'
			}
			// ,
			// function(data) {
			// 	// Save returned object to local storage
			// 	chrome.storage.sync.set({ data: data[0] }, function() {
			// 		// console.log('Set storage data: ', data[0]);
			// 	});
			// }
		);
	});
};

// Paste data to BAS
btnBAS.onclick = function(element) {
	// Get active tab id
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		// Inject file in active tab
		console.log(tabs);
		chrome.tabs.executeScript(tabs[0].id, { file: '/asset/js/injectBAS.js' });
	});
};

// Paste data to ACS
btnACS.onclick = function(element) {
	// Get active tab id
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		// Inject file in active tab
		// console.log(tabs);
		chrome.tabs.executeScript(tabs[0].id, { file: '/asset/js/injectACS.js' });
	});
};

// Paste data to ACS
// btnACS.onclick = function(element) {
// // Get active tab id
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
// 	// Inject file in active tab
// 	console.log(tabs);
// 	chrome.tabs.executeScript(tabs[0].id, { file: '/asset/js/injectACS.js' });
// });
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
// 	//Send a message to a tab which has your content script injected
// 	chrome.tabs.sendMessage(tabs[0].id, { action: 'GET_DUCK' });
// 	console.log('message sent');
// });

// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// 	chrome.tabs.sendMessage(tabs[0].id, 'asset_modify_actions', data => {
// 		console.log(data);
// 		// do something with config

// 		// var args = { info: config };
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{
// 				code: 'var asset_modify_actions = ' + JSON.stringify(data)
// 			},
// 			function() {
// 				chrome.tabs.executeScript(tabs[0].id, { file: '/asset/js/injectACS.js' });
// 			}
// 		);
// 	});
// });
// };
