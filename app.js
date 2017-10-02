var app = require('./config/server');

app.listen(process.env.PORT || 5000, function() {
    console.log('Server working on port 8080');
})