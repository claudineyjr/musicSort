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
        res.redirect('/');
    });

};

module.exports.cadastrarGenero = function(application, req, res){
    var genero = req.body;

    var connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);

    generosModel.cadastrarGenero(genero, function(error, result){
        if(error){
            res.redirect('/', {error: {msg: 'Erro na inserção'}, success: {}}); 
        } else {
            res.redirect('/', {error: {}, success: {msg: 'Inserido com sucesso!'}});
        }
    });

};