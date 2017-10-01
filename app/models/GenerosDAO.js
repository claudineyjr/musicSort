function GenerosDAO(connection){
    this._connection = connection;
}

GenerosDAO.prototype.getGeneros = (callback) => {
    this._connection.query('insert into genders (genero) values ("connection de bosta")');
}

module.exports = function(){
	return GenerosDAO;
}