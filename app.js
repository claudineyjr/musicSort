var app = require('express')();

app.get('/', function(req, res) {
    res.send('Tudo ok');
});


app.listen(5100, function() {
    console.log('Server working on port 5100');
})