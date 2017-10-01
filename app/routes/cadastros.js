module.exports = function(application) {
    application.get('/cadastros', function(req, res){
        application.app.controllers.cadastros.cadastros(application, req, res);
    });

    application.post('/cadastrarbanda', function(req, res){
        application.app.controllers.cadastros.cadastrarBanda(application, req, res);
    });
}