// injectACS.js
//
// Inject IMS data for FX 0 port on modem
//
(() => {
	chrome.storage.sync.get('data', function (data) {
		console.log(data.data);

		// Open service panel
		//document.getElementById('edit_service_panel_c').style.visibility = 'visible';

		// Open service panel
		document.getElementById('service_change_params').click();

		// Give time to get data (500ms)
		setTimeout(() => {
			// // SIP Server 1
			// document.getElementById('service_fxs0_sip_server_address_check').checked = true;
			// document.getElementById('service_fxs0_sip_server_address').value = "172.29.165.136"

			// // Sec SIP Server 1
			// document.getElementById('service_fxs0_secsip_server_address_check').checked = true;
			// document.getElementById('service_fxs0_secsip_server_address').value = "10.24.23.167"

			// SIP URI 1
			document.getElementById('service_fxs0_sip_uri_check').click();
			document.getElementById('service_fxs0_sip_uri').value = data.data['Public ID'].replace(
				/sip:\+|@ims.t-com.hr/g,
				''
			);

			// SIP Username 1
			// document.getElementById('service_fxs0_sip_username_check').checked = true;
			document.getElementById('service_fxs0_sip_username_check').click();
			document.getElementById('service_fxs0_sip_username').value = data.data['Private ID'];

			// SIP Password 1
			document.getElementById('service_fxs0_sip_password_check').click();
			document.getElementById('service_fxs0_sip_password').value = data.data['User password'];
		}, 500);
	});
})();