module.exports = function(application) {
    application.get('/cadastros', function(req, res){
        application.app.controllers.cadastros.cadastros(application, req, res);
    })
}