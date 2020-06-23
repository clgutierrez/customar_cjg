sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (Controller, JSONModel, formatter, Filter, FilterOperator) {

		return Controller.extend("dttgroup.SAPUI5.controller.CustomerList", {
			
			formatter : formatter,
			
			onInit: function () {

				var oViewModel = new JSONModel({

					Currency: "EUR"
				});

				this.getView().setModel(oViewModel, "view");

			},
			
			onFilterCustomar : function(oEvent){
				
				// built filter array
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				if (sQuery){
					aFilter.push(new Filter("ContactName", FilterOperator.Contains, sQuery));
				}
				
				//filter binding
				var oList = this.byId("customerList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			}

		});
	});