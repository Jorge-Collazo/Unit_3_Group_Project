"use strict";
    
    var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "double gray 3px";
        }

function changeStyleBR(color){
    if (color == "black"){
        document.body.style.background = "black";
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[0].style.background = "white";
        x[0].style.color = "black";
        document.body.style.fontFamily = "fantasy";
        document.getElementById("flavors").style.fontSize = "20pt";
        document.getElementById("flavors").style.border = "outset gray 3px";
        document.getElementById("nav").style.border = "outset gray 3px";
        document.getElementById("history").style.border = "outset gray 3px";
        document.getElementById("info").style.border = "outset gray 3px";
    }
    else if (color == "blue"){
        document.body.style.background = "rgb(0,50,185)";
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "dotted gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "sans-serif";
        }
        x[1].style.background = "white";
        x[1].style.color = "black";
        //document.body.style.fontFamily = "cursive";
        document.getElementById("flavors").style.border = "dotted gray 3px";
        document.getElementById("nav").style.border = "dotted gray 3px";
        document.getElementById("history").style.border = "dotted gray 3px";
        document.getElementById("info").style.border = "dotted gray 3px";
    }
    else if (color == "navy"){
        document.body.style.background = color;
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "ridge gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "sans-serif";
        }
        x[2].style.background = "white";
        x[2].style.color = "black";
        document.body.style.fontFamily = "sans-serif";
        document.getElementById("flavors").style.border = "ridge gray 3px";
        document.getElementById("nav").style.border = "ridge gray 3px";
        document.getElementById("history").style.border = "ridge gray 3px";
        document.getElementById("info").style.border = "ridge gray 3px";
    }
    else if (color == "royalBlue"){
        document.body.style.background = color;
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "inset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[3].style.background = "white";
        x[3].style.color = "black";
        document.body.style.fontFamily = "timesNewRoman";
        document.getElementById("flavors").style.fontSize = "255px"
        document.getElementById("flavors").style.border = "inset gray 3px";
        document.getElementById("nav").style.border = "inset gray 3px";
        document.getElementById("history").style.border = "inset gray 3px";
        document.getElementById("info").style.border = "inset gray 3px";
    }
    
}

function changeStyleSC(color){
    if (color == "black"){
        document.body.style.background = "black";
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[0].style.background = "white";
        x[0].style.color = "black";
        document.body.style.fontFamily = "fantasy";
        document.getElementById("flavors").style.fontSize = "20pt";
        document.getElementById("flavors").style.border = "outset gray 3px";
        document.getElementById("nav").style.border = "outset gray 3px";
        document.getElementById("history").style.border = "outset gray 3px";
        document.getElementById("info").style.border = "outset gray 3px";
    }
    else if (color == "blue"){
        document.body.style.background = "rgb(0,50,185)";
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "dotted gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "sans-serif";
        }
        x[1].style.background = "white";
        x[1].style.color = "black";
        //document.body.style.fontFamily = "cursive";
        document.getElementById("flavors").style.border = "dotted gray 3px";
        document.getElementById("nav").style.border = "dotted gray 3px";
        document.getElementById("history").style.border = "dotted gray 3px";
        document.getElementById("info").style.border = "dotted gray 3px";
    }
    else if (color == "navy"){
        document.body.style.background = color;
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "ridge gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "sans-serif";
        }
        x[2].style.background = "white";
        x[2].style.color = "black";
        document.body.style.fontFamily = "sans-serif";
        document.getElementById("flavors").style.border = "ridge gray 3px";
        document.getElementById("nav").style.border = "ridge gray 3px";
        document.getElementById("history").style.border = "ridge gray 3px";
        document.getElementById("info").style.border = "ridge gray 3px";
    }
    else if (color == "royalBlue"){
        document.body.style.background = color;
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "inset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[3].style.background = "white";
        x[3].style.color = "black";
        document.body.style.fontFamily = "timesNewRoman";
        document.getElementById("flavors").style.fontSize = "255px"
        document.getElementById("flavors").style.border = "inset gray 3px";
        document.getElementById("nav").style.border = "inset gray 3px";
        document.getElementById("history").style.border = "inset gray 3px";
        document.getElementById("info").style.border = "inset gray 3px";
    }
    
}