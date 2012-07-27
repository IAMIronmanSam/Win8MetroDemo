// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();
    
    //First Create These Functions
    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                performInitialSetup(eventObject); //Processing the Whole HTML and Data Source
            } else {
                performanceRestore(eventObject);
            }
            WinJS.UI.processAll();
        }
    };

    app.oncheckpoint = function (eventObject) {
        performanceSuspend(eventObject);
    };

    app.start();
    //Windows 8 Application Life Cycle Running,Suspend,NotRunning

    function performInitialSetup(e) {

        WinJS.Utilities.query('button').listen("click", function (e) {
            if (this.id == "addItemButton") {
                ViewModel.UserData.addItem("IceCream", 1, "Vannila", "Walmart");
            }

            else {
                ViewModel.UserData.getItems().pop();
            }
        });

        var setValue = function () {
            var list = ViewModel.UserData.getItems();
            document.getElementById("listinfo").innerText =
                list.getAt(list.length - 1).item;
        };

        var eventTypes = ["itemChanged","iteminserted","itemmoved","itemremoved"];
        eventTypes.forEach(function (type){
            ViewModel.UserData.getItems().addEventListener(type, setValue);
       
        
        
            //This will process the Entire Document and the 2nd Argument to use ViewModel as Data Source
        //WinJS.Binding.processAll(document.body, ViewModel);

            //Action For Button Click Event
            //This statement search for newZipButton id and listern click event on it
           // WinJS.Utilities.query('#newZipButton').listen("click", function (e) { 

            //Update the homeZipCode value from User in RunTime
            //WinJs.utilities.query is equalent to $ in jQuery
           // ViewModel.UserData.homeZipCode = WinJS.Utilities.query('#newZip')[0].value;

        });
        setValue();
    }

    function performRestore(e) { }

    function performSuspend(e) { }

   

    
})();
