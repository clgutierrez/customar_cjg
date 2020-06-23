sap.ui.define([], function () {

	return {
		statusText: function (sStatus) {

			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
			case "S":
				return resourceBundle.getText("formatContactTitleS");
			case "O":
				return resourceBundle.getText("formatContactTitleO");
			case "A":
				return resourceBundle.getText("formatContactTitleA");
			default:
				return sStatus;
				
			}
		}
	};
});