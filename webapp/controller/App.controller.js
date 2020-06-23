sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {

	return Controller.extend("dttgroup.SAPUI5.controller.App", {

		onInit : function () {
			
		},
		
		onOpenHeader : function(){
			
			this.getOwnerComponent().openHelloDialog();
			
		}
		
	});

});