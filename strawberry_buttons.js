"use strict"

// var doc = document.body.style

function changeStyle(theme){
    if(theme == "Noir"){
        document.body.style.background = "#666666";
        document.getElementById("nav").style.background = "#3e3b3b";
        document.getElementById("sB").style.background = "#3e3b3b";
        document.getElementById("tea").style.background = "#3e3b3b";
        document.getElementById("pW").style.background = "#3e3b3b";
        document.getElementById("bR").style.background = "#3e3b3b";
        document.getElementById("lemon").style.background = "#3e3b3b";
        document.getElementById("history").style.background = "#c3bcbc";
        document.getElementById("name").style.color = "#ddd3d3";
    }else if(theme == "Azure"){
        document.body.style.background = "#018abd";
        document.getElementById("nav").style.background = "#005c9d";
        document.getElementById("sB").style.background = "#005c9d";
        document.getElementById("tea").style.background = "#005c9d";
        document.getElementById("pW").style.background = "#005c9d";
        document.getElementById("bR").style.background = "#005c9d";
        document.getElementById("lemon").style.background = "#005c9d";
        document.getElementById("history").style.background = "#93e1ed";
        document.getElementById("name").style.color = "#ddd3d3";
    }else if(theme == "Beach"){
        document.body.style.background = "#ffe9ca";
        document.getElementById("nav").style.background = "#4a73b1";
        document.getElementById("sB").style.background = "#4a73b1";
        document.getElementById("tea").style.background = "#4a73b1";
        document.getElementById("pW").style.background = "#4a73b1";
        document.getElementById("bR").style.background = "#4a73b1";
        document.getElementById("lemon").style.background = "#4a73b1";
        document.getElementById("history").style.background = "#dbe4cf ";
        document.getElementById("name").style.color = "#92dccd";
    }else if(theme == "Strawberry"){
        document.body.style.background = "";
        document.getElementById("nav").style.background = "";
        document.getElementById("sB").style.background = "";
        document.getElementById("tea").style.background = "";
        document.getElementById("pW").style.background = "";
        document.getElementById("bR").style.background = "";
        document.getElementById("lemon").style.background = "";
        document.getElementById("history").style.background = "";
        document.getElementById("name").style.color = "";
    }
}