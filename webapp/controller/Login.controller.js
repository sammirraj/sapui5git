sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.accenture.ZSR_ASSIGNMENT.controller.Login", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Login
		 */
		onInit: function () {
		var oData = {
            Login : {
               Username : "",
               Password : ""
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
		},
		onReset: function()
		{
			this.getView().getModel().setProperty("/Login/Username","");
			this.getView().getModel().setProperty("/Login/Password","");
		},
		onLogin:function()
		{
			var lv_flag=true;
			var arrData = this.getOwnerComponent().getModel("UserDetails").getData();
			var lv_username = this.getView().getModel().getProperty("/Login/Username");
			var lv_password = this.getView().getModel().getProperty("/Login/Password");
			for(var i=0; i<arrData.length;i++)
			{
				if((arrData[i].Username.toUpperCase() === lv_username.toUpperCase())&& (arrData[i].Password === lv_password))
				{
					lv_flag = false;
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("Home",{
					name:window.encodeURIComponent(lv_username)
					});
				}
			}
			if(lv_flag)
			{
				sap.m.MessageToast.show("Invalid Credentials");
			}	
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Login
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Login
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.accenture.ZSR_ASSIGNMENT.view.Login
		 */
		//	onExit: function() {
		//
		//	}

	});

});