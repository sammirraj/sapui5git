sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("com.accenture.ZSR_ASSIGNMENT.controller.Sales", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Sales
		 */
		onInit: function () {
	var oVizFrame2= this.getView().byId("idVizFrame");
					//  this.getView().byId('idVizFramedas1').setHeight('0%');
					oVizFrame2.setVizProperties({
						title:{
							text : "Early Deterioration"
						},
						legendGroup : {
							layout : {
								position : "bottom"
							}
						},
						plotArea: {
							colorPalette : d3.scale.category20().range(),
							drawingEffect: "glossy",
							dataLabel:{
								visible : true,
							
							
							},
							gridline:{
								size: 2,
								type:""
							},
							valueAxis: {
							
							
							},
						},
					});
					var scales = [
						{
							'feed': 'color',
							'palette': ['#2d24d4','#179b36','#ed9f31']
						}
						];
					oVizFrame2.setVizScales(scales);
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
					oRouter.navTo("Login");
			}
		},
		onLogout: function()
		{
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Login");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Sales
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Sales
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Sales
		 */
		//	onExit: function() {
		//
		//	}

	});

});