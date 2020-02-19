"use strict";



function changeBg(color){
    document.body.style.background = color;
    document.body.style.color = "white";
    var p = document.querySelectorAll("a");
    for (var i = 0; i < p.length; i++) {
    //p[i].style.border = "outset gray 3px";
    //p[i].style.background = "black";
    p[i].style.color = "white";
    p[i].style.fontFamily = "timesNewRoman";
    }
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
    }
    else if (color == "blue"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[1].style.background = "white";
        x[1].style.color = "black";
    }
    else if (color == "navy"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[2].style.background = "white";
        x[2].style.color = "black";
    }
    else if (color == "darkBlue"){
        var x = document.querySelectorAll("button");
        for (var i = 0; i < x.length; i++) {
        x[i].style.border = "outset gray 3px";
        x[i].style.background = "black";
        x[i].style.color = "white";
        x[i].style.fontFamily = "timesNewRoman";
        }
        x[3].style.background = "white";
        x[3].style.color = "black";
    }
    
}