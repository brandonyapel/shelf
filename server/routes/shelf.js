var express = require('express')
var router = express.Router();
var Shelf = require('../models/shelf.schema')
var passport = require('passport');
var path = require('path');

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

router.post('/', function (req, res) {
    console.log('/shelf post')

    var itemToAdd = new Shelf ({
        description : req.body.description,
        username : req.user.username,
        image : req.body.image
      });


    itemToAdd.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});




















router.delete('/:id', function(req,res){
    console.log('/shelf delete');
    Shelf.remove({_id: req.params.id}, function(errorMakingDatabaseQuery, result){
        if(errorMakingDatabaseQuery){
            console.log('error with shelf delete', errorMakingDatabaseQuery);
        } else {
            console.log('result', result);
            res.sendStatus(200);
        }
    })

});



module.exports = router;