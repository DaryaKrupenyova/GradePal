"use strict";

header.addEventListener("mouseenter", function(){
    let menuNotifications = document.getElementById("menu_notifications");
    let menuAccount = document.getElementById("menuAccount");
    let div_menuAccount = document.getElementById("div_menuAccount");
    let menuCalendar = document.getElementById("menuCalendar");
    let menuCourses = document.getElementById("menuCourses");
    let menuGrades = document.getElementById("menuGrades");
    let menuTeachers = document.getElementById("menuTeachers");
    let menuSettings = document.getElementById("menuSettings");
    let menuLogout = document.getElementById("menuLogout");

    if(menuCalendar.classList.contains('span_hide') == true){
        menuNotifications.classList.toggle('span_hide');
        menuAccount.classList.toggle('span_hide');
        div_menuAccount.classList.toggle('span_hide');
        menuCalendar.classList.toggle('span_hide');
        menuCourses.classList.toggle('span_hide');
        menuGrades.classList.toggle('span_hide');
        menuTeachers.classList.toggle('span_hide');
        menuSettings.classList.toggle('span_hide');
        menuLogout.classList.toggle('span_hide');
    }
});

header.addEventListener("mouseleave", function(){
    let menuNotifications = document.getElementById("menu_notifications");
    let menuAccount = document.getElementById("menuAccount");
    let div_menuAccount = document.getElementById("div_menuAccount");
    let menuCalendar = document.getElementById("menuCalendar");
    let menuCourses = document.getElementById("menuCourses");
    let menuGrades = document.getElementById("menuGrades");
    let menuTeachers = document.getElementById("menuTeachers");
    let menuSettings = document.getElementById("menuSettings");
    let menuLogout = document.getElementById("menuLogout");
    
    if(menuCalendar.classList.contains('span_hide') == false){
        menuNotifications.classList.toggle('span_hide');
        menuAccount.classList.toggle('span_hide');
        div_menuAccount.classList.toggle('span_hide');
        menuCalendar.classList.toggle('span_hide');
        menuCourses.classList.toggle('span_hide');
        menuGrades.classList.toggle('span_hide');
        menuTeachers.classList.toggle('span_hide');
        menuSettings.classList.toggle('span_hide');
        menuLogout.classList.toggle('span_hide');
    }
});