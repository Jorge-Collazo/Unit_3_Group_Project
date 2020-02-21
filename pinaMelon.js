"use strict";

function changeBg(color){
    document.body.style.background = color;
   
    if (color == "butt1"){
        document.getElementsByTagName("html")[0].style.background = "pink";
    }
    else if (color == "butt2"){
        document.getElementsByTagName("html")[0].style.background = "yellow";
        document.getElementsByTagName("html")[0].style.animation = "shine 1.4s infinite";

    }
    else if (color == "butt3"){
        document.getElementsByTagName("html")[0].style.background = "url('blue_rasp.jpg')";
    }
    else if (color == "butt4"){
        document.getElementsByTagName("html")[0].style.background = "url('pina.png')no-repeat";
        document.getElementsByTagName("html")[0].style.backgroundSize += "cover";
    }
}