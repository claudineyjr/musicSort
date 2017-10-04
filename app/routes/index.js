module.exports = function(application) {
    application.get('/', function(req, res){
        res.render('index.ejs', {error: {}, success: {}});
    })

    application.get('/banco', function(req, res){
        application.app.controllers.cadastros.banco(application, req, res);
    })
}