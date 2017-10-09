module.exports.cadastros = function(application, req, res){
	var connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		res.render("form_add_bandas", {generos : result, validacao: []});
	});
};


module.exports.cadastrarBanda = function(application, req, res){
    var banda = req.body;

    req.assert('nome', 'O nome da banda não pode ser vazio').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        var connection = application.config.dbConnection();
        var generosModel = new application.app.models.GenerosDAO(connection);
    
        generosModel.getGeneros(function(error, result){
            res.render('form_add_bandas', {generos : result, validacao: errors});
        });	
        return;
    }
    var connection = application.config.dbConnection();
    var bandasModel = new application.app.models.BandasDAO(connection);

    bandasModel.cadastrarBanda(banda, function(error, result){
        if(error){
            console.log(error);
        }
        res.redirect('/cadastros');
    });

};

module.exports.cadastrarGenero = function(application, req, res){
    var genero = req.body;

    req.assert('genero', 'O genero não pode ser vazio').notEmpty();

    let errors = req.validationErrors();
    
    if(errors) {
        var connection = application.config.dbConnection();
        var generosModel = new application.app.models.GenerosDAO(connection);
    
        generosModel.getGeneros(function(error, result){
            res.render('form_add_bandas', {generos : result, validacao: errors});
        });	
        return;
    }

    var connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);

    generosModel.cadastrarGenero(genero, function(error, result){
        if(error){
            console.log(error);
        } else {
            res.redirect('/cadastros');
        }
    });

};

function getGeneros(application,req, res){
    var connection = application.config.dbConnection();
	var generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		return result;
	});	
}