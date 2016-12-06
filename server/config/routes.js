var User = require('../controllers/users');

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname + '../../client/index.html');
    });

    app.get('/users', User.index);
    app.post('/users', User.create);
    app.delete('/users/:id', User.delete);
    app.get('/users/recent', User.recent);
};
