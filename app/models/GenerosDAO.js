function GenerosDAO(connection){
	this._connection = connection;
}

GenerosDAO.prototype.getGeneros = function(callback){
	this._connection.query('SELECT * FROM genders ORDER BY genero DESC', callback);
}

GenerosDAO.prototype.cadastrarBanda = function(banda, callback){
    this._connection.query('insert into bandas set ? ', banda, callback)
}
module.exports = function(){
	return GenerosDAO;
}