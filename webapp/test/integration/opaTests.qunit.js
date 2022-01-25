/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/accenture/ZSR_ASSIGNMENT/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});