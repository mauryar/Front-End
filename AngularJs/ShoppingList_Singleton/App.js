(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
   list1.items = ShoppingListCheckOffService.getItems();
    list1.removeItem = function (itemIndex, item) {
      console.log("itemIndex : "+item.name);
    ShoppingListCheckOffService.removeItem(itemIndex);
    ShoppingListCheckOffService.addItemChecked(item.name, item.quantity);

  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getItemsChecked();


}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Biscuit",
    quantity: "20"
  },
  {
    name: "Donuts",
    quantity: "30"
  },
  {
    name: "Cookies",
    quantity: "4"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];


  service.removeItem = function (itemIndex, item) {
    toBuy.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return toBuy;
  };


// List of bought items
  var bought = [];


  service.addItemChecked = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    bought.push(item);
  };

  

  service.getItemsChecked = function () {
    return bought;
  };

}

})();