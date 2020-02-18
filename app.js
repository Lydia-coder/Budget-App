// modules bugetController, UIController, controller

//BUGET CONTROLLER
const bugetController = (function() {})();

// UI CONTROLLER
const UIController = (function() {
  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

//GLOBAL APP CONTROLLER
const controller = (function(bugetCtrl, UICtrl) {
  const DOM = UICtrl.getDOMstrings();
  const ctrlAddItem = function() {
    // 1.  get input data
    const input = UICtrl.getInput();
    // 2. add item to buget controller
    // 3. add the new item to userinterface
    // 4. calculate buget
    // 5. display buget on ui
    console.log(input);
  };

  document
    .querySelector(DOM.inputButton)
    .addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(bugetController, UIController);
