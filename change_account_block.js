"use strict";

let personalSwitch = document.getElementById("personal_switch");
let educationSwitch = document.getElementById("education_switch");
let securitySwitch = document.getElementById("security_switch");

personalSwitch.addEventListener("click", function(){
    let personalHR = document.getElementById("personal_hr");
    let educationHR = document.getElementById("education_hr");
    let securityHR = document.getElementById("security_hr");

    let personalBlock = document.getElementById("personal_block");
    let educationBlock = document.getElementById("education_block");
    let securityBlock = document.getElementById("security_block");

    personalHR.style.opacity = "1";
    educationHR.style.opacity = "0";
    securityHR.style.opacity = "0";

    personalBlock.style.display = "block";
    educationBlock.style.display = "none";
    securityBlock.style.display = "none";
});

educationSwitch.addEventListener("click", function(){
    let personalHR = document.getElementById("personal_hr");
    let educationHR = document.getElementById("education_hr");
    let securityHR = document.getElementById("security_hr");

    let personalBlock = document.getElementById("personal_block");
    let educationBlock = document.getElementById("education_block");
    let securityBlock = document.getElementById("security_block");

    personalHR.style.opacity = "0";
    educationHR.style.opacity = "1";
    securityHR.style.opacity = "0";

    personalBlock.style.display = "none";
    educationBlock.style.display = "block";
    securityBlock.style.display = "none";
});

securitySwitch.addEventListener("click", function(){
    let personalHR = document.getElementById("personal_hr");
    let educationHR = document.getElementById("education_hr");
    let securityHR = document.getElementById("security_hr");

    let personalBlock = document.getElementById("personal_block");
    let educationBlock = document.getElementById("education_block");
    let securityBlock = document.getElementById("security_block");

    personalHR.style.opacity = "0";
    educationHR.style.opacity = "0";
    securityHR.style.opacity = "1";

    personalBlock.style.display = "none";
    educationBlock.style.display = "none";
    securityBlock.style.display = "block";
});
