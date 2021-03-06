const db = require("../models");

module.exports = {
    find: function(req, res) {
        db.Article.find().then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },
    insert: function(req, res) {
        db.Article.create(req.body).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },
    delete: function(req, res) {
        db.Article.remove({
            _id: req.params.id
        }).then(function(doc) {
            res.json(doc);
        }).catch(function(err){
            res.json(err);
        });
    }
};