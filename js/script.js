$(document).ready(
  function() {
    var studente = {
      "nome" : "Corrado",
      "cognome" : "Caruso",
      "eta" : 35
    };
    // console.log(studente);
    
    for (var key in studente) {
      console.log(studente[key]);
    }


    var source = $('#studente').html();
    var template = Handlebars.compile(source);

    var studente = {
      nome: "Corrado",
      cognome: "Caruso",
      eta: 35
    };
    var html = template(studente);
    $('.container').append(html);


  }
);
