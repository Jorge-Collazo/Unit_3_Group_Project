"use strict";

function changeBg(color){
    document.body.style.background = color;
   
    if (color == "butt1"){
        document.getElementsByTagName("body")[0].style.background = "rgb(241, 62, 62)";
        document.getElementsByTagName("button")[0].style.background = "red";
        document.getElementsByTagName("h2")[0].style.color = "white";
        document.getElementsByTagName("p")[0].style.font = "white";
        document.getElementsByTagName("div#nav")[0].style.background = "white";
        document.getElementsByTagName("div.col-1-6:hover")[0].style.background = "white";
    }
    if (color == "butt2"){
        document.getElementsByTagName("body")[0].style.background = "rgb(255, 255, 61)";
        document.getElementsByTagName("button")[0].style.background = "rgb(255, 255, 61)";
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("p")[0].style.font = "black";    }
    if (color == "butt3"){
        document.getElementsByTagName("body")[0].style.background = "rgb(95, 218, 255)";
        document.getElementsByTagName("button")[0].style.background = "rgb(70, 104, 255)";
        document.getElementsByTagName("button")[0].style.color = "white";
        document.getElementsByTagName("h2")[0].style.color = "white";
        document.getElementsByTagName("p")[0].style.font = "white";    }
    if (color == "butt4"){
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("button")[0].style.background = "";
        document.getElementsByTagName("h2")[0].style.color = "";
        document.getElementsByTagName("p")[0].style.font = "";    }
}