(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.itemsToBuy;

  list1.BuyItem = function (itemIndex) {
    ShoppingListCheckOffService.BuyItem(itemIndex);
  }
}

// LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.itemsAlreadyBougth;
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  service.itemsToBuy = [
      {name: 'Apple', quantity:10},
      {name: 'Water', quantity:2},
      {name: 'Bread', quantity:3},
      {name: 'Milk', quantity:5},
      {name: 'Butter', quantity:6},
      {name: 'Cheese', quantity:1},
  ];


  // List of shopping items
service.itemsAlreadyBougth = [];

  service.BuyItem = function (itemIndex) {

      service.itemsAlreadyBougth.push(service.itemsToBuy[itemIndex]);
      service.itemsToBuy.splice(itemIndex,1);
  };
}



})();
