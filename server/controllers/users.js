var User = require('../models/user');

module.exports = {
    index: function(req, res){
        User.find({}, function(err, users){
            if(err){
                res.json(err);
            }
            else {
                res.json(users);
            }
        });
    },
    create: function(req, res){
        User.create(req.body, function(err){
            if(err) {return res.json(err);}
            return res.json(true);
        });
    },
    delete: function(req, res){
        User.remove({_id: req.params.id}, function(err){
            if (err) {return res.json(err);}
            return res.json(true);
        });
    },
    recent: function(req, res){
        User.find({})
        .sort('-createdAt')
        .limit(3)
        .exec(function(err, results){
            console.log(results);
            res.json(results);
        });
    }
};
