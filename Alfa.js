/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

         Vides = 7;
         Paraula="";

        function Comprova() {
            Lletra = document.getElementById("lletra").value;
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

            if ((Lletra >= "a") && (Lletra <= "l")) 
                {
                    alert("es correcta");
                    document.getElementById("correcta").innerHTML = 
                            document.getElementById("correcta").innerHTML + Lletra;
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
