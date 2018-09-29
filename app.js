//Budget Controller
var budgetController = (function() {

   
    


})();




//UI Controller
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //inc or exp
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
            
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };





}) ();



//Global Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function () {
        // Get input data; Add the item to budget controller; Add item to UI; Caluclaute budget; Display Budget
        var input = UICtrl.getInput();


        
    };

    return {
        init: function () {
            setupEventListeners();
        }
    };

}) (budgetController, UIController);

controller.init();