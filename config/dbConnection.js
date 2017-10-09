var mysql = require('mysql');

var cfenv = require('cfenv');
var appenv = cfenv.getAppEnv();

var services = appenv.services;

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

var connMySql = null;

if (process.env.VCAP_SERVICES) {
    console.log('tentando conexao');
    var services = JSON.parse(process.env.VCAP_SERVICES);
    var mysqlCreds = services['cleardb'][0]['credentials'];
    connMySql = function(){
        return mysql.createConnection({
            host: mysqlCreds.hostname,
            port: mysqlCreds.port,
            user: mysqlCreds.username,
            password: mysqlCreds.password,
            database: mysqlCreds.name
        });   
      }
} else {
    console.error('VCAP nao encontrado');
}



module.exports = function(){
    return connMySql;
}