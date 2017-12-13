myApp.service('ShelfService', ['$http', function ($http) {
    console.log('ShelfService Loaded');

    var self = this;

    self.shelf = { list: '' };
    self.item = { description: '', image: '' };

    self.getShelf = function () {
        console.log("getShelf()");
        $http({
            method: 'GET',
            url: '/shelf'
        }).then(function (response) {
            console.log('response', response);
            self.shelf.list = response.data;
        });
    }
    self.getShelf();

    self.addItem = function (newItem) {
        console.log('addItem()', newItem)
        $http({
            method: 'POST',
            url: '/shelf',
            data: newItem
        }).then(function (response) {
            self.getShelf();
            self.item.description = '';
            self.item.image = '';
        })
    };
}]);
