// modules bugetController, UIController, controller

//BUGET CONTROLLER
const bugetController = (function() {})();

// UI CONTROLLER
const UIController = (function() {
  return {
    getInput: function() {
      return {
        type: document.querySelector(".add__type").value, // will be either inc or exp
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value
      };
    }
  };
})();

//GLOBAL APP CONTROLLER
const controller = (function(bugetCtrl, UICtrl) {
  const ctrlAddItem = function() {
    // 1.  get input data
    const input = UICtrl.getInput();
    // 2. add item to buget controller
    // 3. add the new item to userinterface
    // 4. calculate buget
    // 5. display buget on ui
    console.log(input);
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(bugetController, UIController);
