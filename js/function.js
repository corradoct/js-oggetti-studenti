function listaAggiornata(array, template) {
  for (var i = 0; i < array.length; i++) {
    var studenteMostrato = {
      nome: array[i].nome,
      cognome: array[i].cognome,
      eta: array[i].eta
    };
    var html = template(studenteMostrato);
    $('.listaStudenti').append(html);
  }
}
