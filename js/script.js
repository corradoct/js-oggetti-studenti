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

    var studenti = [
      {
        "nome" : "Corrado",
        "cognome" : "Caruso",
        "eta" : 35
      },
      {
        "nome" : "Andrea",
        "cognome" : "Rossi",
        "eta" : 33
      },
      {
        "nome" : "Marco",
        "cognome" : "Bianchi",
        "eta" : 25
      }
    ];
    // console.log(studenti);

    for (var i = 0; i < studenti.length; i++) {
      var singoloStudenteNome = studenti[i].nome;
      var singoloStudenteCognome = studenti[i].cognome;
      console.log(singoloStudenteNome + ' ' + singoloStudenteCognome);
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
