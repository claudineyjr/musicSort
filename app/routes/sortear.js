module.exports = function(application) {
    application.get('/sortear', function(req, res){
        res.render('sortear.ejs', {error: {}, success: {}});
    })

    application.get('/fazersorteio', function(req, res){
        application.app.controllers.sorteio.sorteio(application, req, res);
    })
}