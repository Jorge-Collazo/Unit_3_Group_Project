"use strict";

    var x = document.querySelectorAll("button");

function changeStyle(theme){

    if(theme == 'Original'){
        document.getElementsByTagName("html")[0].style.background = "url('tealeaves.png') no-repeat #A7DB42";
        document.getElementsByTagName("html")[0].style.backgroundSize = "140%";
        document.body.style.background = "";
        document.body.style.color = "black";
        document.getElementById("banner").style.background = "";
        document.getElementById("banner").style.color = "";
        document.getElementById("nav").style.background = "";
        document.getElementById("sB").style.background = "";
        document.getElementById("tea").style.background = "";
        document.getElementById("pW").style.background = "";
        document.getElementById("bR").style.background = "";
        document.getElementById("lemon").style.background = "";
        document.getElementById("history").style.background = "";
        document.getElementById("history").style.color = "black";
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
        document.getElementsByTagName("html")[0].style.background = "url('darktealeaves.png') no-repeat black";
        document.getElementsByTagName("html")[0].style.backgroundSize = "140%";
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("banner").style.background = "url('darkicebanner.png') no-repeat";
        document.getElementById("banner").style.color = "white";
        document.getElementById("nav").style.background = "grey";
        document.getElementById("sB").style.background = "grey";
        document.getElementById("tea").style.background = "grey";
        document.getElementById("pW").style.background = "grey";
        document.getElementById("bR").style.background = "grey";
        document.getElementById("lemon").style.background = "grey";
        document.getElementById("history").style.background = "radial-gradient(lightgrey, grey)";
        document.getElementById("history").style.color = "black";
        document.getElementById("button1").style.background = "black";
        document.getElementById("button2").style.background = "black";
        document.getElementById("button3").style.background = "black";
        document.getElementById("button4").style.background = "black";
        document.getElementById("button1").style.color = "white";
        document.getElementById("button2").style.color = "white";
        document.getElementById("button3").style.color = "white";
        document.getElementById("button4").style.color = "white";
    }

    else if(theme == 'Forest'){
        document.getElementsByTagName("html")[0].style.background = "url('tealeaves.png') no-repeat #A7DB42";
        document.getElementsByTagName("html")[0].style.backgroundSize = "140%";
        document.body.style.background = "#47A155";
        document.body.style.color = "black";
        document.getElementById("banner").style.background = "";
        document.getElementById("banner").style.color = "";
        document.getElementById("nav").style.background = "#98c764";
        document.getElementById("sB").style.background = "#98c764";
        document.getElementById("tea").style.background = "#98c764";
        document.getElementById("pW").style.background = "#98c764";
        document.getElementById("bR").style.background = "#98c764";
        document.getElementById("lemon").style.background = "#98c764";
        document.getElementById("history").style.background = "radial-gradient(#CFB5AC, #9F6D5C)";
        document.getElementById("history").style.color = "black";
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
        document.getElementsByTagName("html")[0].style.background = "url('tealeaves.png') no-repeat #A7DB42";
        document.getElementsByTagName("html")[0].style.backgroundSize = "140%";
        document.body.style.background = "#CAE4DB";
        document.body.style.color = "black";
        document.getElementById("banner").style.background = "";
        document.getElementById("banner").style.color = "";
        document.getElementById("nav").style.background = "#DCAE1D";
        document.getElementById("sB").style.background = "#DCAE1D";
        document.getElementById("tea").style.background = "#DCAE1D";
        document.getElementById("pW").style.background = "#DCAE1D";
        document.getElementById("bR").style.background = "#DCAE1D";
        document.getElementById("lemon").style.background = "#DCAE1D";
        document.getElementById("history").style.background = "radial-gradient(#BCCECA, #7A9D96)";
        document.getElementById("history").style.color = "black";
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