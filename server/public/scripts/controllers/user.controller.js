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

  //users list
  self.users = ShelfService.users;
  //File stack function
  self.uploadImage = ShelfService.uploadImage;
  //get only items for user function 
  self.getUsersItems = ShelfService.getUsersItems;

}]);

