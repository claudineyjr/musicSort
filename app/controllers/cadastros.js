module.exports.cadastros = function(application, req, res){
	var connection = application.config.dbConnection();
	var generosModel = new application.app.models.GenerosDAO(connection);

	generosModel.getGeneros(function(error, result){
		res.render("form_add_bandas", {generos : result, validacao: []});
	});	
};

module.exports.banco = function(application, req, res){
	var connection = application.config.dbConnection();
	connection.query('CREATE DATABASE IF NOT EXISTS `s2mmusic` CHARACTER SET latin1 COLLATE latin1_swedish_ci');
	connection.query('USE `s2mmusic`');
	connection.query('CREATE TABLE `bandas` ( `id` Int( 11 ) AUTO_INCREMENT NOT NULL, `nome` VarChar( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, `genero` Int( 11 ) NOT NULL, PRIMARY KEY ( `id` ) ) CHARACTER SET = utf8 COLLATE = utf8_general_ci ENGINE = InnoDB AUTO_INCREMENT = 25');
	connection.query('CREATE TABLE `genders` (  `id` Int( 11 ) AUTO_INCREMENT NOT NULL, `genero` VarChar( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, PRIMARY KEY ( `id` ) ) CHARACTER SET = utf8 COLLATE = utf8_general_ci ENGINE = InnoDB AUTO_INCREMENT = 21');
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