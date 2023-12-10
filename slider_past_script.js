"use strict";

let prevArrow_Past = document.getElementById("prevArrow_Past");
let nextArrow_Past = document.getElementById("nextArrow_Past");

let cardsPast = document.getElementById("cardsPast");

let cardG = document.getElementById("cardG");
let cardH = document.getElementById("cardH");
let cardI = document.getElementById("cardI");
let cardJ = document.getElementById("cardJ");
let cardK = document.getElementById("cardK");
let cardL = document.getElementById("cardL");

let areas_Past = "G H I J";

prevArrow_Past.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Past.length; i++) {
        if (areas_Past[i] != " "){
            let symbol = String.fromCharCode(areas_Past[i].charCodeAt(0) - 1);
            if (symbol == 'F'){
                symbol = "L";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Past[i];
        }
    }
    areas_Past = newareas;

    cardsPast.style.gridTemplateAreas = `"${areas_Past}"`;

    if (areas_Past == "L G H I"){
        cardL.classList.toggle("card_none");
        cardJ.classList.toggle("card_none");
    }
    else if (areas_Past == "K L G H"){
        cardK.classList.toggle("card_none");
        cardI.classList.toggle("card_none");
    }
    else if (areas_Past == "J K L G"){
        cardJ.classList.toggle("card_none");
        cardH.classList.toggle("card_none");
    }
    else if (areas_Past == "I J K L"){
        cardI.classList.toggle("card_none");
        cardG.classList.toggle("card_none");
    }
    else if (areas_Past == "H I J K"){
        cardH.classList.toggle("card_none");
        cardL.classList.toggle("card_none");
    }
    else if (areas_Past == "G H I J"){
        cardG.classList.toggle("card_none");
        cardK.classList.toggle("card_none");
    }
});



nextArrow_Past.addEventListener("click", function(){
    let newareas = "";
    for (let i = 0; i < areas_Past.length; i++) {
        if (areas_Past[i] != " "){
            let symbol = String.fromCharCode(areas_Past[i].charCodeAt(0) + 1);
            if (symbol == 'M'){
                symbol = "G";
            }
            newareas += symbol;
        }
        else{
            newareas += areas_Past[i];
        }
    }
    areas_Past = newareas;

    cardsPast.style.gridTemplateAreas = `"${areas_Past}"`;

    if (areas_Past == "H I J K"){
        cardK.classList.toggle("card_none");
        cardG.classList.toggle("card_none");
    }
    else if (areas_Past == "I J K L"){
        cardL.classList.toggle("card_none");
        cardH.classList.toggle("card_none");
    }
    else if (areas_Past == "J K L G"){
        cardG.classList.toggle("card_none");
        cardI.classList.toggle("card_none");
    }
    else if (areas_Past == "K L G H"){
        cardH.classList.toggle("card_none");
        cardJ.classList.toggle("card_none");
    }
    else if (areas_Past == "L G H I"){
        cardI.classList.toggle("card_none");
        cardK.classList.toggle("card_none");
    }
    else if (areas_Past == "G H I J"){
        cardJ.classList.toggle("card_none");
        cardL.classList.toggle("card_none");
    }
});