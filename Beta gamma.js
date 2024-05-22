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
          


function AlaWeb_SQLite (Idioma) {
    config = {
        locateFile: filename => '/dist/$(filename}'
    };
  alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
            SELECT * FROM TblTextosGUI;',[],
   [], function(idiomes) {SQL_TblTextosGUI (Idioma, Idiomes.pop());}
   );
   
    }


function CanviarIdioma(Idioma) {
    
    if ((IdIdioma != "ca")&& (IdIdioma !="es")) {
        document.getElementById("Idiomes").value = IdIdioma;
        
    }
    }
    
    
