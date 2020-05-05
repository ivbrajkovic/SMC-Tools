// injectBAS.js
//
// Inject IMS data into BAS
//
(() => {
  // Max attempts
  let tryout = 10;

  // retreive object stored in browsare storage
  chrome.storage.sync.get("data", function(data) {
    // Debug info
    console.log(data.data);

    // Fill "Create Subscriber" data
    document.getElementById("subscriberId").value = data.data["Subscriber ID"];
    document.getElementById("MTASServicePackage").options.selectedIndex = 1;
    document.getElementById("chargingId").value = data.data["Charging ID"];
    document.getElementById("IsbrokenDNS").checked = false;

    // Open "Subscription Private User" tab
    document
      .querySelector("#gridViewIMSSubscriptionPrivateUser_col0 > a")
      .click();
    // document.getElementById(DetailsActionLink).click();

    /***************************************************************************
     * Subscription Private User
     */

    // Try counter 1
    let count1 = 0;
    let userPassword;
    function privateUser() {
      // Exit if no success in 10 attempts
      if (count1++ >= tryout) {
        console.log("TCL: privateUser -> count1", count1);
        return;
      }

      // Get element
      userPassword = document.getElementById("userPassword");

      // Recursion if element == null
      if (!userPassword)
        setTimeout(() => {
          privateUser();
        }, 100);
      else {
        document.getElementById("privateUserId").value =
          data.data["Private ID"];
        userPassword.value = data.data["User password"];

        // ! There is no element in new BAS
        // referenceAccessLocation.value = data.data['Reference Access Location'];

        // Save changes
        document.getElementById("btnSavePrivateUser_CD").click();
      }
    }
    privateUser();

    /***************************************************************************
     * Subscriber Public Data
     */

    // Open "Subscriber Public Data" tab
    document.querySelector("#gridViewIMSSubscriptionPubData_col0 > a").click();

    // Try counter 2
    let count2 = 0;
    let maxSessions;
    function publicData() {
      // Exit if no success in 10 attempts
      if (count2++ >= tryout) {
        console.log("TCL: publicData -> count2", count2);
        return;
      }

      // Get element
      maxSessions = document.getElementById("maxSessions");

      // Recursion if element == null
      if (!maxSessions)
        setTimeout(() => {
          publicData();
        }, 100);
      else {
        document.getElementById("publicIdValue").value = data.data[
          "Public ID"
        ].replace(/sip:\+/, "");
        document.getElementById("implicitRegSet").value =
          data.data["ImplicitRegSetID"];

        // ! There is no "wirelineAccessAllowed" element in new BAS
        // document.getElementById('wirelineAccessAllowed').options.selectedIndex = 0;
        // let options = document.getElementById('wirelineAccessAllowed').options;
        // for (let i = 0, j = options.length; i < j; i++)
        // 	if (options[i].value == data.data['Wireline access allowed'])
        // 		options.selectedIndex = i;

        document.getElementById("phoneContext").value =
          data.data["PHONE CONTEXT"];
        maxSessions.value = 3;

        // Save changes
        document.getElementById("btnSavePubData_CD").click();
      }
    }
    publicData();
  });
})();
