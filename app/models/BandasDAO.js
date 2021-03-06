function BandasDAO(connection){
	this._connection = connection;
}

BandasDAO.prototype.getBandas = function(callback){
	this._connection.query('SELECT * FROM bandas ORDER BY nome ASC', callback);
}

BandasDAO.prototype.getBandasByLetra = function(generos, gender, initialLetter, callback){
    console.log('SELECT * FROM bandas WHERE genero = "'
    + gender + '" AND nome LIKE "' + initialLetter + '%" ORDER BY nome');
    this._connection.query('SELECT * FROM bandas WHERE genero = "'
        + gender + '" AND nome LIKE "' + initialLetter + '%" ORDER BY nome', callback);
}

BandasDAO.prototype.cadastrarBanda = function(banda, callback){
    this._connection.query('insert into bandas set ? ', banda, callback)
}

BandasDAO.prototype.getListagem = function(callback){
    this._connection.query('SELECT bandas.id, bandas.nome, genders.genero FROM bandas INNER JOIN genders ON bandas.genero = genders.id ORDER BY bandas.nome ASC', callback);
}

module.exports = function(){
	return BandasDAO;
}