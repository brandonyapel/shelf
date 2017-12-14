myApp.controller('UserController', ['UserService', 'ShelfService', function (UserService, ShelfService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;

  //items from get request shelf data are located in self.shelf.list
  self.shelf = ShelfService.shelf
  //post items to shelf
  self.addItem = ShelfService.addItem
  self.item = ShelfService.item




  self.deleteItem = ShelfService.deleteItem
}]);
