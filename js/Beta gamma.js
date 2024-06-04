/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Variables Globals.
    var Paraula = [];
    var Lletres = ["_","_","_","_","_","_","_"];
    var Vides = 7;

// Llista de paraules
var paraules = ["cordes","fetge","forca","jutges","Jutgat","mengen","penjat","quinta","setze"];
var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis penjat", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];

//Escull una parayula aleotoria
var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];

//Marca cada lletre amb un "_"
for(var i=0; i <paraula.length; i++) {
   Paraula[i] = "_";
   }
   
// Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
    const Taula_dft = [
        // Deixam per defecte les paraules i pistes en Català
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca", "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
    ];
    var Taula = Taula_dft;
   
     // Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Base de Dades Joc del Penjat",
            "Versio": "Versió γ Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Base de Datos Juego del Ahorcado",
            "Versio": "Versión γ Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Database Version",
            "Versio": "Hangman Game γ Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ];
    var Idiomes = Idiomes_dft;
    //
    //
// Vides = 7;
        // Paraula="";
         
        function Comprova() {
            Lletra = document.getElementById("lletra").value;
            document.getElementById("lletra").value = "";
            Lletra = Lletra.toLowerCase();
           
            switch (Lletra) {
                case "à":
                case "á":
                    Lletra = "a";
                  break;
                case "è":
                case "é":
                    Lletra = "e";
                  break;
                case "ì":
                case "í":
                    Lletra = "i";
                  break;
                case "ò":
                case "ó":
                    Lletra = "o";
                  break;
                case "ù":
                case "ú":
                    Lletra = "u";
                  break;
                case 5:
                  break;
              }
             
            alert(paraula);
            var pos = paraula.indexOf(Lletra);
            if ((pos != -1) && (Lletra != "")) {
                document.getElementById("miau").play();
                window.alert("Encertat");
               
                for(var i= pos; i < paraula.length; i++)
                    if (paraula[i] == Lletra) {
                        Paraula[i] = Lletra;
                //    }
            }
           // document.getElementById("paraula").innerHTML = Paraula;
       // } else if ((lletra >= "a") && (lletra <= "z"))
               
               
                // document.getElementById("disfraz3").hidden = true;
                // document.getElementById("disfraz2").hidden = false;
                // document.getElementById("disfraz1").hidden = true;

                    alert("es correcta");
                    document.getElementById("correcta").innerHTML =
                            document.getElementById("correcta").innerHTML + Lletra;
                    document.getElementById("miau").play();
                }
            else{
                    alert("es incorrecta");
                // Lletra = Lletra + lletra + "";
                document.getElementById("incorrecta").innerHTML =
                    document.getElementById("incorrecta").innerHTML + Lletra;

                 Vides = Vides - 1;
                 
                 document.getElementById("vides").innerHTML =
                         "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

            switch(Vides) {
                case 6:
                    document.getElementById("ahorcado_5").hidden = false;
                    document.getElementById("ahorcado_6").hidden = true;
                    break;
                case 5:
                    document.getElementById("ahorcado_4").hidden = false;
                    document.getElementById("ahorcado_5").hidden = true;
                    break;
                case 4:
                    document.getElementById("ahorcado_3").hidden = false;
                    document.getElementById("ahorcado_4").hidden = true;
                    break;
                case 3:
                    document.getElementById("ahorcado_2").hidden = false;
                    document.getElementById("ahorcado_3").hidden = true;
                    break;
                case 2:
                    document.getElementById("ahorcado_1").hidden = false;
                    document.getElementById("ahorcado_2").hidden = true;
                    break;
                case 1:
                    document.getElementById("ahorcado_0").hidden = false;
                    document.getElementById("ahorcado_1").hidden = true;
                    break;




            }
           
            }
           
            if(Vides <= 0) {
                window.alert("i has perdut!");
                AturaTot();
            } else {
                if (Paraula.length >=14) {
                    window.alert("i has guanyat!");
                    AturaTot();
                }
            }
    }
     
              // Amagan totes les imatges del joc llevat de la primera.
          function Amaga(){
            // window.alert("Amaga");
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_6").hidden = false;
          }
         
          function AturaTot(){
             
          }
         

    //Canviam els diferents literals de la GUI segons l'idioma
     function CanviarIdioma(IdIdioma) {
        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            document.getElementById("Idiomes").value = IdIdioma;
        }

        AlaWeb_SQLite(IdIdioma);
        Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);

        // Canviam els diferents literals de la GUI segons l'idioma        
        document.title = Idioma.Titol;
        document.getElementById("Versio").innerHTML = Idioma.Versio;
        document.getElementById("lletra").placeholder = Idioma.Input;
        document.getElementById("comprovar").innerHTML = Idioma.Comprovar;


        // Escull una nova paraula aleatòriament
        window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
        aleatori = Math.floor(Math.random() * Taula.length);
        paraula = Taula[aleatori].Paraula;
        pista = Taula[aleatori].Pista;
       
        Paraula = [];
        // Marcam cada lletra amb un "_"
        for (var i = 0; i < paraula.length; i++) {
            Paraula[i] = "_";
        }
        document.getElementById("paraula").innerHTML = Paraula;

        for (var i = 0; i < Vides_dft - Vides; i++) {
            Lletres[i] = "_";
        }
        document.getElementById("lletres").innerHTML = Lletres;

        Vides = Vides_dft;    
        document.getElementById("vides").innerHTML =
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        AmagaForca();
       
        // Bandera de la paraula/pista
        if (IdIdioma_ant == "en") { IdIdioma_ant = "gb"; }                                
        document.getElementById("bandera").src = "img/" + IdIdioma_ant + ".png";                      
        IdIdioma_ant = IdIdioma;
       
        // Bandera del textos de la GUI
        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            // Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"  
            if (IdIdioma == "en") { IdIdioma = "gb"; }                                
            document.getElementById("gb").src = "img/" + IdIdioma + ".png";        
        }
    }

    // Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: filename => `/dist/${filename}`
        };

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
            [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
        //    [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        );

        /*
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT Paraula, Pista \n\
                FROM TblParaules INNER JOIN TblPistes \n\
                ON TblParaules.IdPista = TblPistes.IdPista \n\
                WHERE TblParaules.IdIdioma = "' + IdIdioma + '";',
              [], function(taula) {Print_Data(Taula = taula.pop());}
        //    [], function(taula) {SQL_TblParaulesPistes(IdIdioma, taula.pop());}
        );
        */
    }
   
        function SQL_TblTextosGUI(IdIdioma, TblTextosGUI)
            {
            Idiomes=TblTextosGUI;
            if(Idiomes.length==0){Idiomes=Idiomes_dft;};
            if(Idiomes.find(Idioma=>Idioma.IdIdioma==IdIdioma)==undefined){
                window.alert("GUI:Idioma no trobat/Idioma no encontrado/Lenguage not found!");
                idiomes=Idiomes_dft;
            }
           
        }
           
        function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {
            // window.alert("SQL_TblParaulesPistes IdIdioma = '" + IdIdioma + IdIdioma + "'");
            Taula = TblParaulesPistes;
            if (Taula.length == 0) {
                window.alert("Idioma sense paraules / Idioma sin palabras / Language without words!");
                Taula = Taula_dft;
                IdIdioma = "ca";
            }
               
            }
               
    // Print data  
    function Print_Data(res) {
        for (var i in res)
        {
           // console.log("row " + i);
           // document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i])
             {
              // console.log(" " + res[i][j]);
              // document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    }

