"use strict";

let prevArrow_Future = document.getElementById("prevArrow_Future");
let nextArrow_Future = document.getElementById("nextArrow_Future");

let cardsFuture = document.getElementById("cardsFuture");

let cardM = document.getElementById("cardM");
let cardN = document.getElementById("cardN");
let cardO = document.getElementById("cardO");
let cardP = document.getElementById("cardP");
let cardQ = document.getElementById("cardQ");
let cardR = document.getElementById("cardR");

let areas_Future = "M N O P";

prevArrow_Future.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Future.length; i++) {
        if (areas_Future[i] != " "){
            let symbol = String.fromCharCode(areas_Future[i].charCodeAt(0) - 1);
            if (symbol == 'L'){
                symbol = "R";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Future[i];
        }
    }
    areas_Future = newareas;

    cardsFuture.style.gridTemplateAreas = `"${areas_Future}"`;

    if (areas_Future == "R M N O"){
        cardR.classList.toggle("card_none");
        cardP.classList.toggle("card_none");
    }
    else if (areas_Future == "Q R M N"){
        cardQ.classList.toggle("card_none");
        cardO.classList.toggle("card_none");
    }
    else if (areas_Future == "P Q R M"){
        cardP.classList.toggle("card_none");
        cardN.classList.toggle("card_none");
    }
    else if (areas_Future == "O P Q R"){
        cardO.classList.toggle("card_none");
        cardM.classList.toggle("card_none");
    }
    else if (areas_Future == "N O P Q"){
        cardN.classList.toggle("card_none");
        cardR.classList.toggle("card_none");
    }
    else if (areas_Future == "M N O P"){
        cardM.classList.toggle("card_none");
        cardQ.classList.toggle("card_none");
    }
});



nextArrow_Future.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Future.length; i++) {
        if (areas_Future[i] != " "){
            let symbol = String.fromCharCode(areas_Future[i].charCodeAt(0) + 1);
            if (symbol == 'S'){
                symbol = "M";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Future[i];
        }
    }
    areas_Future = newareas;

    cardsFuture.style.gridTemplateAreas = `"${areas_Future}"`;

    if (areas_Future == "N O P Q"){
        cardQ.classList.toggle("card_none");
        cardM.classList.toggle("card_none");
    }
    else if (areas_Future == "O P Q R"){
        cardR.classList.toggle("card_none");
        cardN.classList.toggle("card_none");
    }
    else if (areas_Future == "P Q R M"){
        cardM.classList.toggle("card_none");
        cardO.classList.toggle("card_none");
    }
    else if (areas_Future == "Q R M N"){
        cardN.classList.toggle("card_none");
        cardP.classList.toggle("card_none");
    }
    else if (areas_Future == "R M N O"){
        cardO.classList.toggle("card_none");
        cardQ.classList.toggle("card_none");
    }
    else if (areas_Future == "M N O P"){
        cardP.classList.toggle("card_none");
        cardR.classList.toggle("card_none");
    }
});