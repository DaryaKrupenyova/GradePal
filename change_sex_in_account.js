"use strict";

let femaleSex = document.getElementById("female");
let maleSex = document.getElementById("male");

femaleSex.addEventListener("click", function(){
    let femaleSex = document.getElementById("female");
    let maleSex = document.getElementById("male");
    
    femaleSex.style.border = "1px solid #000";;
    maleSex.style.border = "1px solid #fff";;
});

maleSex.addEventListener("click", function(){
    let femaleSex = document.getElementById("female");
    let maleSex = document.getElementById("male");
    
    femaleSex.style.border = "1px solid #fff";;
    maleSex.style.border = "1px solid #000";;
});