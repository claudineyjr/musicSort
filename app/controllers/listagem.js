module.exports.lista = function(application, req, res){
	var connection = application.config.dbConnection();
    var bandasModel = new application.app.models.BandasDAO(connection);

	bandasModel.getListagem(function(error, result){
		res.render("listagem", {bandas : result});
	});
};