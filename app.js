(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope, $filter) {

  $scope.message = "";
  $scope.menu = "";

// Process button press event
 $scope.ProcessText = function()
 {
      $scope.message = GetMessage(CountItems($scope.menu));
 }

// Calculate number of items separated by commas in string
  function CountItems(str) {
    var itemsCount = 0;
    var items = str.split(",");

    var index;
    for (index = 0; index < items.length; ++index)
    {
      if(items[index].trim().length>0) itemsCount++;
    }
    return itemsCount;

  };

// Create message based on number of items
  function GetMessage(count)
  {
      if(count==0) return "Please enter data first";
      if(count<=3) return "Enjoy";

      return "Too much!";
  }

};


})();
