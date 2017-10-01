module.exports.cadastros = function(application, req, res){
    const connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);

    generosModel.getGeneros(function(error, result){
        console.log(error);
        res.render('/form_add_bandas', {generos: result});
    });
}