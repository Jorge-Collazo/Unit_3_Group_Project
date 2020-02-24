"use strict";

var rev1 = ["N-ice Dude ice has made staying hydrated taste better!", "I buy one 10-pack of every flavor each week. My dad said I have an issue.", "It tastes good in water, but I just eat them straight out of the ice tray."];
var rev2 = ["My kids will actually choose water over soda during dinner now thanks to N-ice Dude.", "It makes snowcones easy to make at home. Crushing the ice really helps alleviate my stress.", "Even I get thirsty when I put N-ice Dude ice in my dog's bowl. I'm almost tempted to drink from it myself."];
var rev3 = ["I just fill a pitcher with N-ice Dude ice and have it ready in the fridge at anytime.", "I have never been more hydrated before in my life! I just can't stop drinking it.", "I use the ice in a bag for bruises. When it melts, I just drink it out of the bag!"];
var i = 1;

function loadMore(){
    if(i == 0){
        document.getElementById("rev1").innerHTML = rev1[i];
        document.getElementById("rev2").innerHTML = rev2[i];
        document.getElementById("rev3").innerHTML = rev3[i];
       i++;
    }else if(i == 1){
        document.getElementById("rev1").innerHTML = rev1[i];
        document.getElementById("rev2").innerHTML = rev2[i];
        document.getElementById("rev3").innerHTML = rev3[i];
       i++;
    }else if(i == 2){
        document.getElementById("rev1").innerHTML = rev1[i];
        document.getElementById("rev2").innerHTML = rev2[i];
        document.getElementById("rev3").innerHTML = rev3[i];
        i = 0;
    }
    
}