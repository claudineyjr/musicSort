var mysql = require('mysql');

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

if (process.env.VCAP_SERVICES) {
    var services = JSON.parse(process.env.VCAP_SERVICES);
    var mysql_creds = services['mysql'][0]['credentials'];
}

var connMySql = function() {
    return mysql.createConnection({
        host: host,
        user: mysql_creds.user,
        password: mysql_creds.password,
        database: mysql_creds.name,
        debug: true
    });
}

module.exports = function(){
    return connMySql;
}