var mysql = require('mysql');

var connMySql = function() {
    return mysql.createConnection({
        host: 's2mmusic.mysql.dbaas.com.br',
        user: 's2mmusic',
        password: 'banana01@',
        database: 's2mmusic'
    });
}

module.exports = function(){
    return connMySql;
}


