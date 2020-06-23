sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {

	return Controller.extend("dttgroup.SAPUI5.controller.HelloPanel", {

		onInit: function () {},

		onMostrarHola: function () {

			//Leer texto con i18n / model
			var sHello = this.getView().getModel("i18o").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);

			//MessageToast.show("Hola Mundo");
			MessageToast.show(sMsg);
		},

		onOpenDialog: function () {
			
			this.getOwnerComponent().openHelloDialog();

		}

	});

});