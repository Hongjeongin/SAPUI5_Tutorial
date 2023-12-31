sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONeModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);
            
            // set Data Model
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n Model
            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }


    });
});