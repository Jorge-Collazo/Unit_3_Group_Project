"use strict";
function changeStyle(theme){
    if(theme == "Blooming Blossoms"){
        document.body.style.background = "#7E212C";
        document.getElementById("nav").style.background = "#9e0000";
        document.getElementById("info").style.background = "radial-gradient(white, #FED5D9)";
        document.getElementById("benefits").style.background = "radial-gradient(white, #FED5D9)";
        document.getElementById("nutrients").style.background = "#CCD3D9";
        document.getElementById("title").style.color = "";
        document.getElementById("b1").style.background = "#9e0000";
        document.getElementById("b1").style.color = "white";
        document.getElementById("b2").style.background = "#9e0000";
        document.getElementById("b2").style.color = "white";
        document.getElementById("b3").style.background = "#9e0000";
        document.getElementById("b3").style.color = "white";
        document.getElementById("b4").style.background = "#9e0000";
        document.getElementById("b4").style.color = "white";
    }else if(theme == "Foggy Landscapes"){
        document.body.style.background = "#030923";
        document.getElementById("nav").style.background = "#3A5A69";
        document.getElementById("info").style.background = "radial-gradient(white, #D5C5E9)";
        document.getElementById("benefits").style.background = "radial-gradient(white, #D5C5E9)";
        document.getElementById("nutrients").style.background = "#FDDCEF";
        document.getElementById("b1").style.background = "#3A5A69";
        document.getElementById("b1").style.color = "white";
        document.getElementById("b2").style.background = "#3A5A69";
        document.getElementById("b2").style.color = "white";
        document.getElementById("b3").style.background = "#3A5A69";
        document.getElementById("b3").style.color = "white";
        document.getElementById("b4").style.background = "#3A5A69";
        document.getElementById("b4").style.color = "white";
    }else if(theme == "Vivid Overlays"){
        document.body.style.background = "#003853";
        document.getElementById("nav").style.background = "#3D82AB";
        document.getElementById("info").style.background = "radial-gradient(white, #45BB89)";
        document.getElementById("benefits").style.background = "radial-gradient(white, #45BB89)";
        document.getElementById("nutrients").style.background = "#91D4C2";
        document.getElementById("b1").style.background = "#3D82AB";
        document.getElementById("b1").style.color = "white";
        document.getElementById("b2").style.background = "#3D82AB";
        document.getElementById("b2").style.color = "white";
        document.getElementById("b3").style.background = "#3D82AB";
        document.getElementById("b3").style.color = "white";
        document.getElementById("b4").style.background = "#3D82AB";
        document.getElementById("b4").style.color = "white";
    }else if(theme == "Northern Lights"){
        document.body.style.background = "";
        document.getElementById("nav").style.background = "";
        document.getElementById("info").style.background = "";
        document.getElementById("benefits").style.background = "";
        document.getElementById("nutrients").style.background = "";
        document.getElementById("title").style.color = "";
        document.getElementById("b1").style.background = "";
        document.getElementById("b1").style.color = "";
        document.getElementById("b2").style.background = "";
        document.getElementById("b2").style.color = "";
        document.getElementById("b3").style.background = "";
        document.getElementById("b3").style.color = "";
        document.getElementById("b4").style.background = "";
        document.getElementById("b4").style.color = "";
    }
}