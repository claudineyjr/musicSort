function BandasDAO(connection){
	this._connection = connection;
}

BandasDAO.prototype.getBandas = function(callback){
	this._connection.query('SELECT * FROM bandas ORDER BY genero ASC', callback);
}

BandasDAO.prototype.getBandasByLetra = function(gender, initialLetter, callback){
    this._connection.query('SELECT * FROM bandas WHERE gender = "'
        + gender + '" AND nome LIKE "' + initialLetter + '%"', callback);
}

BandasDAO.prototype.cadastrarBanda = function(banda, callback){
    this._connection.query('insert into bandas set ? ', banda, callback)
}

module.exports = function(){
	return BandasDAO;
}