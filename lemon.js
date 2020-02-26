"use strict";
function changeStyle(theme){
    if(theme == "Dark"){
        document.getElementsByTagName('html')[0].style.background = "url('lemonsDark.png') no-repeat rgb(116, 116, 116)";
        document.getElementsByTagName('html')[0].style.backgroundSize = "cover";
        document.getElementsByTagName('html')[0].style.height = "139%";
        document.getElementById("banner").style.background = "url('darkicebanner.png')";
        document.getElementById("banner").style.color = "white";
        document.body.style.background = "rgb(13, 13, 13)";
        document.getElementById("nav").style.background = "rgb(116, 116, 116)";
        document.getElementById("sB").style.background = "rgb(116, 116, 116)";
        document.getElementById("tea").style.background = "rgb(116, 116, 116)";
        document.getElementById("pW").style.background = "rgb(116, 116, 116)";
        document.getElementById("bR").style.background = "rgb(116, 116, 116)";
        document.getElementById("lemon").style.background = "rgb(116, 116, 116)";
        document.getElementById("history").style.background = "radial-gradient(rgb(95, 95, 95),rgb(56, 56, 56)";
        document.body.style.color = "white";
        document.getElementById("b1").style.color = " rgb(255, 255, 255)";
        document.getElementById("b2").style.color = " rgb(255, 255, 255)";
        document.getElementById("b3").style.color = " rgb(255, 255, 255)";
        document.getElementById("b4").style.color = " rgb(255, 255, 255)";
        document.getElementById("b1").style.background = "rgb(0, 0, 0)";
        document.getElementById("b2").style.background = "rgb(0, 0, 0)";
        document.getElementById("b3").style.background = "rgb(0, 0, 0)";
        document.getElementById("b4").style.background = "rgb(0, 0, 0)";

    }else if(theme == "Ice"){
        document.getElementsByTagName('html')[0].style.background = ""
        document.body.style.background = "rgb(159, 228, 255)";
        document.getElementById("nav").style.background = "rgb(224, 252, 255)";
        document.getElementById("sB").style.background = "rgb(224, 252, 255)";
        document.getElementById("tea").style.background = "rgb(224, 252, 255)";
        document.getElementById("pW").style.background = "rgb(224, 252, 255)";
        document.getElementById("bR").style.background = "rgb(224, 252, 255)";
        document.getElementById("lemon").style.background = "rgb(224, 252, 255)";
        document.getElementById("history").style.background = "radial-gradient(rgb(255, 255, 255), rgb(90, 222, 255)";
        document.body.style.color = "black";
        document.getElementById("b1").style.color = "black";
        document.getElementById("b2").style.color = "black";
        document.getElementById("b3").style.color = "black";
        document.getElementById("b4").style.color = "black";
        document.getElementById("b1").style.background = "rgb(174, 243, 255)";
        document.getElementById("b2").style.background = "rgb(174, 243, 255)";
        document.getElementById("b3").style.background = "rgb(174, 243, 255)";
        document.getElementById("b4").style.background = "rgb(174, 243, 255)";
    }else if(theme == "Summer"){
        document.getElementsByTagName('html')[0].style.background = ""
        document.body.style.background = "rgb(255, 237, 180)";
        document.getElementById("nav").style.background = "rgb(162, 247, 250)";
        document.getElementById("sB").style.background = "rgb(162, 247, 250)";
        document.getElementById("tea").style.background = "rgb(162, 247, 250)";
        document.getElementById("pW").style.background = "rgb(162, 247, 250)";
        document.getElementById("bR").style.background = "rgb(162, 247, 250)";
        document.getElementById("lemon").style.background = "rgb(162, 247, 250)";
        document.getElementById("history").style.background = "radial-gradient(rgb(255, 252, 243), rgb(255, 223, 134))";
        document.body.style.color = "black";
        document.getElementById("b1").style.color = "black";
        document.getElementById("b2").style.color = "black";
        document.getElementById("b3").style.color = "black";
        document.getElementById("b4").style.color = "black";
        document.getElementById("b1").style.background = "rgb(255, 205, 172)";
        document.getElementById("b2").style.background = "rgb(255, 205, 172)";
        document.getElementById("b3").style.background = "rgb(255, 205, 172)";
        document.getElementById("b4").style.background = "rgb(255, 205, 172)";
    }else if(theme == "Return"){
        document.getElementsByTagName('html')[0].style.background = ""
        document.body.style.background = "";
        document.getElementById("nav").style.background = "";
        document.getElementById("sB").style.background = "";
        document.getElementById("tea").style.background = "";
        document.getElementById("pW").style.background = "";
        document.getElementById("bR").style.background = "";
        document.getElementById("lemon").style.background = "";
        document.getElementById("history").style.background = "";
        document.body.style.color = "black";
        document.getElementById("b1").style.color = "";
        document.getElementById("b2").style.color = "";
        document.getElementById("b3").style.color = "";
        document.getElementById("b4").style.color = "";
        document.getElementById("b1").style.background = "";
        document.getElementById("b2").style.background = "";
        document.getElementById("b3").style.background = "";
        document.getElementById("b4").style.background = "";
    }
}