///<reference path = "//Microsoft.WinJS.0.6/js/base.js"/>
///<reference path = "//Microsoft.WinJS.0.6/js/ui.js"/>

(function () {

    "use strict"; //Strict Mode to avoid Implicit Global Variable creation 


    //Creating Global Name Space ViewModel
    WinJS.Namespace.define("ViewModel", { //Wont Allow to Export _variables Globaly

        //This will trigger a Notification if there is a change in the varaiable's getter/Setter
        UserData: WinJS.Binding.as({

             //WinJS.binding.as method Adds Number of private properties [_variable]
            //private members will have Getter and Setter like POJO Class.
            //These Members Wont Export Globaly.
            _shoppingItems: [],
            _preferredStores: [],

            //public members More like Normal Variable  
            homeZipCode: null,

            //getter for Store
            getStores: function () {
                return this._preferredStores;
            },
            //Setter for Store
            addStore: function (newStore) {
                this._preferredStores.push(newStore);
            },

            //Getter for Item
            getItem: function () {
                return this._shoppingItems;
            },

            //Setter For Item
            addItem: function (newName, NewQuality, newStore) {
                this._shoppingItems.push({ //Pushing The Values to the _shoppingItems Array
                    item: newName,
                    quality: NewQuality,
                    store: newStore
                });
            }
        })
    });

    //Public Variable Data Change in Any where
    ViewModel.UserData.homeZipCode = "NY 10118";

    //Adding Static Store Item
    ViewModel.UserData.addStore("WholeFoods");
    ViewModel.UserData.addStore("Kroger");
    ViewModel.UserData.addStore("Costco");
    ViewModel.UserData.addStore("Walmart");

    //Adding Static Item Data
    ViewModel.UserData.addItem("Apples", 4, "Whole Foods");
    ViewModel.UserData.addItem("Hotdogs", 12, "Costco");
    ViewModel.UserData.addItem("Soda", "4 Pack", "Costco");


})(); //Self Executing Function (function(){.......})();