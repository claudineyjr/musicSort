module.exports = function(application) {
    application.get('/historico', function(req, res){
        res.render('historico.ejs', {error: {}, success: {}});
    })
}