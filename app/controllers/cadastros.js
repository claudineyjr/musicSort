module.exports.cadastros = function(application, req, res){
	var connection = application.config.dbConnection();
	var generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		res.render("form_add_bandas", {generos : result});
	});	
};

module.exports.cadastrarBanda = function(application, req, res){
    var banda = req.body;

    var connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);

    generosModel.cadastrarBanda(banda, function(error, result){
        res.redirect('/')
    })

}