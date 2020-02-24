"use strict";

    var x = document.querySelectorAll("button");

function changeStyle(theme){

    if(theme == 'Original'){
        document.body.style.background = "";
        document.getElementById("nav").style.background = "";
        document.getElementById("sB").style.background = "";
        document.getElementById("tea").style.background = "";
        document.getElementById("pW").style.background = "";
        document.getElementById("bR").style.background = "";
        document.getElementById("lemon").style.background = "";
        document.getElementById("history").style.background = "";
        document.getElementById("name").style.color = "";
        document.getElementById("history").style.background = "";
        document.getElementById("button1").style.background = "#CCCA1A";
        document.getElementById("button2").style.background = "#CCCA1A";
        document.getElementById("button3").style.background = "#CCCA1A";
        document.getElementById("button4").style.background = "#CCCA1A";
        document.getElementById("button1").style.color = "black";
        document.getElementById("button2").style.color = "black";
        document.getElementById("button3").style.color = "black";
        document.getElementById("button4").style.color = "black";
    }

    else if(theme == 'Nuit'){
        // original colors but darker
        // #CCCA1A -> #66650C (50%)
        // #EAD7A8 -> #A17E27 (50%)
        // #A3A53F -> #51521F (50%)
        

    }

    else if(theme == 'Forest'){
        document.body.style.background = "#47A155";
        document.getElementById("nav").style.background = "#98c764";
        document.getElementById("sB").style.background = "#98c764";
        document.getElementById("tea").style.background = "#98c764";
        document.getElementById("pW").style.background = "#98c764";
        document.getElementById("bR").style.background = "#98c764";
        document.getElementById("lemon").style.background = "#98c764";
        document.getElementById("history").style.background = "#9F6D5C";
        document.getElementById("button1").style.background = "#F0CDB5";
        document.getElementById("button2").style.background = "#F0CDB5";
        document.getElementById("button3").style.background = "#F0CDB5";
        document.getElementById("button4").style.background = "#F0CDB5";
        document.getElementById("button1").style.color = "black";
        document.getElementById("button2").style.color = "black";
        document.getElementById("button3").style.color = "black";
        document.getElementById("button4").style.color = "black";
    }
    
    else if(theme == "Tramonto"){
        document.body.style.background = "#CAE4DB";
        document.getElementById("nav").style.background = "#DCAE1D";
        document.getElementById("sB").style.background = "#DCAE1D";
        document.getElementById("tea").style.background = "#DCAE1D";
        document.getElementById("pW").style.background = "#DCAE1D";
        document.getElementById("bR").style.background = "#DCAE1D";
        document.getElementById("lemon").style.background = "#DCAE1D";
        document.getElementById("history").style.background = "#7A9D96";
        document.getElementById("button1").style.background = "#00303F";
        document.getElementById("button2").style.background = "#00303F";
        document.getElementById("button3").style.background = "#00303F";
        document.getElementById("button4").style.background = "#00303F";
        document.getElementById("button1").style.color = "white";
        document.getElementById("button2").style.color = "white";
        document.getElementById("button3").style.color = "white";
        document.getElementById("button4").style.color = "white";
    }
}