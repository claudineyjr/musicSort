module.exports.sorteio = function (application, req, res) {
  var connection = application.config.dbConnection();
  var generosModel = new application.app.models.GenerosDAO(connection);
  var bandasModel = new application.app.models.BandasDAO(connection);
  var generos;

  generosModel.getGeneros(function (error, result, generos) {
    generos = result;
    let randomGender = getRandomGender(0, generos.length - 1);
    console.log(randomGender);
    var letraInicial = getRandomLetter();
    bandasModel.getBandasByLetra(generos, generos[randomGender].id, letraInicial, function (error, resultado) {
      let mensagemErro = '';
      if (resultado.length == 0) {
        mensagemErro = 'Não existem bandas de ' + generos[randomGender].genero
          + ' com a letra ' + letraInicial;
        res.render('sortear', { 
          error: {msg: mensagemErro},
          success: {},
          genero: generos[randomGender].genero,
          bandas: resultado
        });
      } else {
        res.render('sortear', { 
          error: mensagemErro,
          success: {},
          genero: generos[randomGender].genero,
          bandas: resultado
        });
      }
    });
  });
};

function getRandomGender(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  let alfabeto = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]
  min = 0;
  max = 25;
  return alfabeto[Math.floor(Math.random() * (max - min + 1)) + min];
}