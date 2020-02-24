"use strict";
/*    var p = document.querySelectorAll("a");
    for (var i = 0; i < p.length; i++) {
    //p[i].style.border = "outset gray 3px";
    //p[i].style.background = "black";
    //p[i].style.color = "orange";
    p[i].style.fontFamily = "timesNewRoman";
    }
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
    }
    else if (color == "darkBlue"){
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
    }
    
}
*/
//global variables


//functions to change style
/*function saturate(){

}
function darkMode(){

}
function summer(){

}
function back(){

}
*/
function changeStyle(theme){
    if(theme == "Dark"){
        document.body.style.background = "rgb(66, 66, 66)";
        document.getElementById("nav").style.background = "rgb(116, 116, 116)";
        document.getElementById("sB").style.background = "rgb(116, 116, 116)";
        document.getElementById("tea").style.background = "rgb(116, 116, 116)";
        document.getElementById("pW").style.background = "rgb(116, 116, 116)";
        document.getElementById("bR").style.background = "rgb(116, 116, 116)";
        document.getElementById("lemon").style.background = "rgb(116, 116, 116)";
        document.getElementById("history").style.background = "radial-gradient(rgb(176, 176, 176),rgb(116, 116, 116)";
        document.getElementById("name").style.color = "#ddd3d3";
    }else if(theme == "Ice"){
        document.body.style.background = "rgb(159, 228, 255)";
        document.getElementById("nav").style.background = "rgb(224, 252, 255)";
        document.getElementById("sB").style.background = "rgb(224, 252, 255)";
        document.getElementById("tea").style.background = "rgb(224, 252, 255)";
        document.getElementById("pW").style.background = "rgb(224, 252, 255)";
        document.getElementById("bR").style.background = "rgb(224, 252, 255)";
        document.getElementById("lemon").style.background = "rgb(224, 252, 255)";
        document.getElementById("history").style.background = "radial-gradient(rgb(184, 249, 255), rgb(90, 222, 255)";
        document.getElementById("name").style.color = "#92dccd";
    }else if(theme == "Summer"){
        document.body.style.background = "rgb(255, 237, 180)";
        document.getElementById("nav").style.background = "rgb(162, 247, 250)";
        document.getElementById("sB").style.background = "rgb(162, 247, 250)";
        document.getElementById("tea").style.background = "rgb(162, 247, 250)";
        document.getElementById("pW").style.background = "rgb(162, 247, 250)";
        document.getElementById("bR").style.background = "rgb(162, 247, 250)";
        document.getElementById("lemon").style.background = "rgb(162, 247, 250)";
        document.getElementById("history").style.background = "radial-gradient(rgb(255, 252, 243), rgb(255, 223, 134))";
        document.getElementById("name").style.color = "#92dccd";
    }else if(theme == "Return"){
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