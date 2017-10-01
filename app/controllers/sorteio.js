module.exports.sorteio = function(application, req, res){
	var connection = application.config.dbConnection();
    var generosModel = new application.app.models.GenerosDAO(connection);
    var bandasModel = new application.app.models.BandasDAO(connection);
    var generos;

	generosModel.getGeneros(function(error, result){
		this.generos = result;
    });
    let randomIndex = getRandom(0, generos.length);

    console.log(randomIndex);
};

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }