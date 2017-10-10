module.exports.cadastros = function(application, req, res){
	let connection = application.config.dbConnection();
    let generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		res.render("form_add_bandas", {generos : result, validacao: []});
    });
    
    connection.end();
};


module.exports.cadastrarBanda = function(application, req, res){
    let banda = req.body;

    req.assert('nome', 'O nome da banda não pode ser vazio').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        let connection = application.config.dbConnection();
        let generosModel = new application.app.models.GenerosDAO(connection);
    
        generosModel.getGeneros(function(error, result){
            res.render('form_add_bandas', {generos : result, validacao: errors});
        });	
        connection.end();
        return;
    }
    let connection = application.config.dbConnection();
    let bandasModel = new application.app.models.BandasDAO(connection);

    bandasModel.cadastrarBanda(banda, function(error, result){
        if(error){
            console.log(error);
        }
        res.redirect('/cadastros');
    });
    connection.end();
};

module.exports.cadastrarGenero = function(application, req, res){
    let genero = req.body;

    req.assert('genero', 'O genero não pode ser vazio').notEmpty();

    let errors = req.validationErrors();
    
    if(errors) {
        let connection = application.config.dbConnection();
        let generosModel = new application.app.models.GenerosDAO(connection);
    
        generosModel.getGeneros(function(error, result){
            res.render('form_add_bandas', {generos : result, validacao: errors});
        });
        connection.end();
        return;
    }

    let connection = application.config.dbConnection();
    let generosModel = new application.app.models.GenerosDAO(connection);

    generosModel.cadastrarGenero(genero, function(error, result){
        if(error){
            console.log(error);
        } else {
            res.redirect('/cadastros');
        }
    });
    connection.end();
};

function getGeneros(application,req, res){
    let connection = application.config.dbConnection();
	let generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		return result;
    });	
}