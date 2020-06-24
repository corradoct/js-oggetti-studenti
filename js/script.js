$(document).ready(
  function() {
    // *************************  PRIMO PUNTO  ************** //
    var studente = {
      "nome" : "Corrado",
      "cognome" : "Caruso",
      "eta" : 35
    };
    // console.log(studente);

    for (var key in studente) {
      // console.log(studente[key]);
    }

    // *********************  SECONDO PUNTO  ****************** //
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
      // console.log(singoloStudenteNome + ' ' + singoloStudenteCognome);
    }

    // ***********************  TERZO PUNTO  *********************** //
    $('#inserimento').on('click',
      function() {
          var nomeStudenteInserito = prompt('Inserisci il nome');
          var cognomeStudenteInserito = prompt('Inserisci il cognome');
          var etaStudenteInserito = parseInt(prompt('Inserisci l\'età'));
          var studenteInserito = {
            "nome" : nomeStudenteInserito,
            "cognome" : cognomeStudenteInserito,
            "eta" : etaStudenteInserito
          };
          studenti.push(studenteInserito);
          // console.log(studenti);
          $('.listaStudenti').text('');
          listaAggiornata(studenti, template);
      }
    );

    // *****************************  HANDLEBARS  ********************** //
    var source = $('#studente').html();
    var template = Handlebars.compile(source);

    listaAggiornata(studenti, template);

  }
);
