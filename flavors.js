"use strict";

function changeBg(color){
    document.body.style.background = color;
   
    if (color == "butt1"){
        document.getElementsByTagName("body")[0].style.background = "radial-gradient(white, rgb(241, 62, 62))";
        
    }
    if (color == "butt2"){
        document.getElementsByTagName("body")[0].style.background = "radial-gradient(white, rgb(255, 255, 61))";
        
    }
    if (color == "butt3"){
        document.getElementsByTagName("body")[0].style.background = "radial-gradient(rgb(95, 218, 255), white)";
    }
    if (color == "butt4"){
        document.getElementsByTagName("body")[0].style.background = "";
    }
}