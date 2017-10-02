var mysql = require('mysql');

var connMySql = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 's2mmusic',
        port: 3306
    });
}

module.exports = function(){
    return connMySql;
}