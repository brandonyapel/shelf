myApp.service('ShelfService', ['$http', function ($http) {
    console.log('ShelfService Loaded');

    var self = this;

    self.shelf = { list: '' };

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
}]);
