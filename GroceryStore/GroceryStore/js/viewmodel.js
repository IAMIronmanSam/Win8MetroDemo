/// <reference path="//Microsoft.WinJS.0.6/js/base.js" />
/// <reference path="//Microsoft.WinJS.0.6/js/ui.js" />

(function () {
    "use strict";

    var shoppingItemList = new WinJS.Binding.List(); //Using List instead of Array
    var preferredStoreList = new WinJS.Binding.List();

    WinJS.Namespace.define("ViewModel", {
        UserData: WinJS.Binding.as({
            homeZipCode: null,
            getStores: function () {
                return preferredStoreList;
            },

            addStore: function (newStore) {
                preferredStoreList.push(newStore);
            },

            getItems: function () {
                return shoppingItemList;
            },

            addItem: function (newName, newQuantity, newStore) {
                shoppingItemList.push({
                    item: newName,
                    quantity: newQuantity,
                    store: newStore
                });
            }
        })

    });
})();