module.exports = function(application) {
    application.get('/sortear', function(req, res){
        res.render('sortear', {error: [], success: [],
        genero: [], bandas: []});
    })

    application.post('/fazersorteio', function(req, res){
        application.app.controllers.sorteio.sorteio(application, req, res);
    })
}