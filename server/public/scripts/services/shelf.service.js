myApp.service('ShelfService', ['$http', function ($http) {
    console.log('ShelfService Loaded');

    var self = this;

    self.shelf = { list: '' };
    self.item = { description: '', image: '' };
    self.users = { list: '' };

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

    self.deleteItem = function (item) {
        console.log('deleteItem()', item);
        $http({
            method: 'DELETE',
            url: '/shelf/' + item._id,
            data: item
        }).then(function (response) {
            self.getShelf();
        });
    }

    self.getUsers = function () {
        console.log("getUsers()");
        $http({
            method: 'GET',
            url: '/shelf/users'
        }).then(function (response) {
            console.log('response', response);
            self.users.list = response.data;
            console.log(self.users.list);
        });
    }

    self.getUsers();

    self.uploadImage = function () {
        console.log('uploadImage()')
        var fsClient = filestack.init('AAgY4DPJQq2TPxnfxB2Jgz');
        function openPicker() {
            fsClient.pick({
                fromSources: ["local_file_system", "url", "imagesearch", "facebook", "instagram", "googledrive", "dropbox", "evernote", "flickr", "box", "github", "webcam", "video", "audio"],
                accept: ["image/*"],
                maxSize: 102400000,
                maxFiles: 1,
                minFiles: 1
            }).then(function (response) {
                // declare this function to handle response
                self.item.image = response.filesUploaded[0].url;
                console.log(self.item)
            });
        }
        openPicker();

    }

    self.getUsersItems = function (userclicked) {
        var userSelected = {username: userclicked}
        console.log('getUsersItems()',userSelected.username);
        $http({
            method: 'GET',
            url: '/shelf/usersitems',
            params: userSelected
        }).then(function (response) {
            console.log('response', response);
            self.shelf.list = response.data;
        });
    }

}]);






