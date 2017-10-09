var mysql = require('mysql');

var cfenv = require('cfenv');
var appenv = cfenv.getAppEnv();

var services = appenv.services;

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

// for (var svcName in services) {
//     if (svcName.match(/^mysql/)) {
//       var mysqlCreds = services[svcName][0]['credentials'];
//       var connMySql = function(){
//         mysql.createConnection({
//             host: mysqlCreds.host,
//             port: mysqlCreds.port,
//             user: mysqlCreds.user,
//             password: mysqlCreds.password,
//             database: mysqlCreds.name
//         });   
//       }
//     }
// }

// if (process.env.VCAP_SERVICES) {
//     var services = JSON.parse(process.env.VCAP_SERVICES);
//     var mysql_creds = services['mysql'][0]['credentials'];
// }


module.exports = function(){
    return connMySql;
}