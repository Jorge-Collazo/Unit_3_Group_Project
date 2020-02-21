"use strict";
    
    var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "double gray 3px";
        }

function changeStyle(color){
    document.body.style.background = color;
   
    if (color == "black"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[0].style.background = "white";
        x[0].style.color = "black";
        document.getElementById("flavors").style.border = "outset gray 3px";
        document.getElementById("nav").style.border = "outset gray 3px";
        document.getElementById("history").style.border = "outset gray 3px";
        document.getElementById("info").style.border = "outset gray 3px";
    }
    else if (color == "blue"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "dotted gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[1].style.background = "white";
        x[1].style.color = "black";
        document.getElementById("flavors").style.border = "dotted gray 3px";
        document.getElementById("nav").style.border = "dotted gray 3px";
        document.getElementById("history").style.border = "dotted gray 3px";
        document.getElementById("info").style.border = "dotted gray 3px";
    }
    else if (color == "navy"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "ridge gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[2].style.background = "white";
        x[2].style.color = "black";
        document.getElementById("flavors").style.border = "ridge gray 3px";
        document.getElementById("nav").style.border = "ridge gray 3px";
        document.getElementById("history").style.border = "ridge gray 3px";
        document.getElementById("info").style.border = "ridge gray 3px";
    }
    else if (color == "royalBlue"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "inset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[3].style.background = "white";
        x[3].style.color = "black";
        document.getElementById("flavors").style.border = "inset gray 3px";
        document.getElementById("nav").style.border = "inset gray 3px";
        document.getElementById("history").style.border = "inset gray 3px";
        document.getElementById("info").style.border = "inset gray 3px";
    }
    
}