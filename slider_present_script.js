"use strict";

let prevArrow_Present = document.getElementById("prevArrow_Present");
let nextArrow_Present = document.getElementById("nextArrow_Present");

let cardsPresent = document.getElementById("cardsPresent");

let cardA = document.getElementById("cardA");
let cardB = document.getElementById("cardB");
let cardC = document.getElementById("cardC");
let cardD = document.getElementById("cardD");
let cardE = document.getElementById("cardE");
let cardF = document.getElementById("cardF");

let areas_Present = "A B C D";

prevArrow_Present.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Present.length; i++) {
        if (areas_Present[i] != " "){
            let symbol = String.fromCharCode(areas_Present[i].charCodeAt(0) - 1);
            if (symbol == '@'){
                symbol = "F";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Present[i];
        }
    }
    areas_Present = newareas;

    cardsPresent.style.gridTemplateAreas = `"${areas_Present}"`;

    if (areas_Present == "F A B C"){
        cardF.classList.toggle("card_none");
        cardD.classList.toggle("card_none");
    }
    else if (areas_Present == "E F A B"){
        cardE.classList.toggle("card_none");
        cardC.classList.toggle("card_none");
    }
    else if (areas_Present == "D E F A"){
        cardD.classList.toggle("card_none");
        cardB.classList.toggle("card_none");
    }
    else if (areas_Present == "C D E F"){
        cardC.classList.toggle("card_none");
        cardA.classList.toggle("card_none");
    }
    else if (areas_Present == "B C D E"){
        cardB.classList.toggle("card_none");
        cardF.classList.toggle("card_none");
    }
    else if (areas_Present == "A B C D"){
        cardA.classList.toggle("card_none");
        cardE.classList.toggle("card_none");
    }
});



nextArrow_Present.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Present.length; i++) {
        if (areas_Present[i] != " "){
            let symbol = String.fromCharCode(areas_Present[i].charCodeAt(0) + 1);
            if (symbol == 'G'){
                symbol = "A";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Present[i];
        }
    }
    areas_Present = newareas;

    cardsPresent.style.gridTemplateAreas = `"${areas_Present}"`;

    if (areas_Present == "B C D E"){
        cardE.classList.toggle("card_none");
        cardA.classList.toggle("card_none");
    }
    else if (areas_Present == "C D E F"){
        cardF.classList.toggle("card_none");
        cardB.classList.toggle("card_none");
    }
    else if (areas_Present == "D E F A"){
        cardA.classList.toggle("card_none");
        cardC.classList.toggle("card_none");
    }
    else if (areas_Present == "E F A B"){
        cardB.classList.toggle("card_none");
        cardD.classList.toggle("card_none");
    }
    else if (areas_Present == "F A B C"){
        cardC.classList.toggle("card_none");
        cardE.classList.toggle("card_none");
    }
    else if (areas_Present == "A B C D"){
        cardD.classList.toggle("card_none");
        cardF.classList.toggle("card_none");
    }
});