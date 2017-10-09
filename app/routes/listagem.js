module.exports = function(application) {
    application.get('/listagem', function(req, res){
        application.app.controllers.listagem.lista(application, req, res);
    });

    application.delete('/deletar',function(req, res){
        
    });
}