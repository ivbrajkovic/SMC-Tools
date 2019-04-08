// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Rule for activacte extension
var rule1 = {
	conditions: [
		// localhost
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '127.0.0.1' }
		}),
		// Jasper
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'sdisc1p.dc.ht.hr' }
		}),

		// BAS ZG
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '10.24.129.5' }
		}),
		// BAS RI
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '10.23.129.5' }
		}),
		// ACS
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'kacs-lb.ip.t-com.hr' }
		})
	],
	actions: [new chrome.declarativeContent.ShowPageAction()]
};

// On instaled extension event
chrome.runtime.onInstalled.addListener(function() {
	// Activae extention only for pages defined in 'rule1'
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([rule1]);
	});
});
