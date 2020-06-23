	sap.ui.define([
		"sap/ui/core/UIComponent",
		"dttgroup/SAPUI5/model/models",
		"./controller/HelloDialog"
	], function (UIComponent, models, HelloDialog) {

		return UIComponent.extend("dttgroup.SAPUI5.Component", {

			metadata: {
				manifest: "json"
			},

			init: function () {

				// Call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				// Set model on component
				this.setModel(models.crearRecipiente());

				// Set i18n model on component
				this.setModel(models.crearIdiomas(), "i18o");
				
				this._helloDialog = new HelloDialog(this.getRootControl());
			},

			exit : function(){
				
				this._helloDialog.Destroy();
				delete this._helloDialog;
			},
			
			openHelloDialog : function(){
				
				this._helloDialog.open();
				
			}
			
		});
	}

);