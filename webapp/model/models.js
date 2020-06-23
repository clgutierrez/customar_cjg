sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, ResourceModel) {

	return {

		crearRecipiente: function () {

			var oData = {
				recipient: {
					name: "Mundo"
				}
			};

			//var oModel = JSONModel(oData);
			//return oModel;
			return new JSONModel(oData);
		},
		
		crearIdiomas : function() {
					
			var i18nModel = new ResourceModel({
				bundleName: "dttgroup.SAPUI5.i18n.i18n"
			});
			
			return i18nModel;
		}
	};

});