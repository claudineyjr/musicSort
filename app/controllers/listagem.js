module.exports.lista = function(application, req, res){
	let connection = application.config.dbConnection();
    let bandasModel = new application.app.models.BandasDAO(connection);

	bandasModel.getListagem(function(error, result){
		res.render("listagem", {bandas : result});
    });
    connection.end();
};