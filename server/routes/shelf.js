var express = require('express')
var router = express.Router();
var Shelf = require('../models/shelf.schema')

router.get('/', function (req, res){
    console.log('/shelf get');
    Shelf.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery){
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        }else{
            console.log(data);
            res.send(data);
        }
    });
});





module.exports = router;