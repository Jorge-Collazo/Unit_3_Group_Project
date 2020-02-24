"use strict";

function changeBg(color){
    document.body.style.background = color;
   
    if (color == "butt1"){
        document.getElementsByTagName("body")[0].style.background = "rgb(241, 62, 62)";
        document.getElementsByTagName("h2")[0].style.color = "white";
        document.getElementsByTagName("p")[0].style.font = "white";
        document.getElementById("nav").style.background = "rgb(255, 98, 70)";
        document.getElementById("sB").style.background = "rgb(255, 98, 70)";
        document.getElementById("tea").style.background = "rgb(255, 98, 70)";
        document.getElementById("pW").style.background = "rgb(255, 98, 70)";
        document.getElementById("bR").style.background = "rgb(255, 98, 70)";
        document.getElementById("lemon").style.background = "rgb(255, 98, 70)";
        document.getElementById("history").style.background = "radial-gradient(white, rgb(255, 98, 70))";
    }
    if (color == "butt2"){
        document.getElementsByTagName("body")[0].style.background = "rgb(255, 255, 61)";
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("p")[0].style.font = "black";   
        document.getElementById("nav").style.background = "rgb(255, 221, 70)";
        document.getElementById("sB").style.background = "rgb(255, 221, 70)";
        document.getElementById("tea").style.background = "rgb(255, 221, 70)";
        document.getElementById("pW").style.background = "rgb(255, 221, 70)";
        document.getElementById("bR").style.background = "rgb(255, 221, 70)";
        document.getElementById("lemon").style.background = "rgb(255, 221, 70)"; 
        document.getElementById("history").style.background = "radial-gradient(white, rgb(255, 221, 70))";
    }
    if (color == "butt3"){
        document.getElementsByTagName("body")[0].style.background = "rgb(95, 218, 255)";
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("p")[0].style.font = "white";    
        document.getElementById("nav").style.background = "rgb(255, 251, 231)";
        document.getElementById("sB").style.background = "rgb(255, 251, 231)";
        document.getElementById("tea").style.background = "rgb(255, 251, 231)";
        document.getElementById("pW").style.background = "rgb(255, 251, 231)";
        document.getElementById("bR").style.background = "rgb(255, 251, 231)";
        document.getElementById("lemon").style.background = "rgb(255, 251, 231)";
        document.getElementById("history").style.background = "radial-gradient(white, rgb(255, 251, 231))";
    }
    if (color == "butt4"){
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("h2")[0].style.color = "";
        document.getElementsByTagName("p")[0].style.font = "";    
        document.getElementById("nav").style.background = "";
        document.getElementById("sB").style.background = "";
        document.getElementById("tea").style.background = "";
        document.getElementById("pW").style.background = "";
        document.getElementById("bR").style.background = "";
        document.getElementById("lemon").style.background = "";
        document.getElementById("history").style.background = "";
    }
}