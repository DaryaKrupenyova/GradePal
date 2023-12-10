"use strict";

let term1 = document.getElementById("term1");

term1.addEventListener("click", function(){
    let term1Table = document.getElementById("term1Table");
    let arrow1 = document.getElementById("arrow1");

    term1Table.classList.toggle("table_hide");

    if (term1Table.classList.contains("table_hide")){
        arrow1.setAttribute("src", "/icons/Развернуть список (gray).png");
    }
    else {
        arrow1.setAttribute("src", "/icons/Свернуть список (gray).png");
    }
});

let term2 = document.getElementById("term2");

term2.addEventListener("click", function(){
    let term2Table = document.getElementById("term2Table");
    let arrow2 = document.getElementById("arrow2");

    term2Table.classList.toggle("table_hide");

    if (term2Table.classList.contains("table_hide")){
        arrow2.setAttribute("src", "/icons/Развернуть список (gray).png");
    }
    else {
        arrow2.setAttribute("src", "/icons/Свернуть список (gray).png");
    }
});

let term3 = document.getElementById("term3");

term3.addEventListener("click", function(){
    let term3Table = document.getElementById("term3Table");
    let arrow3 = document.getElementById("arrow3");

    term3Table.classList.toggle("table_hide");

    if (term3Table.classList.contains("table_hide")){
        arrow3.setAttribute("src", "/icons/Развернуть список (gray).png");
    }
    else {
        arrow3.setAttribute("src", "/icons/Свернуть список (gray).png");
    }
});