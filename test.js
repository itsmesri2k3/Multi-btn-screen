var menucontent = document.getElementById("menu-content");
var closebtn = document.getElementById("close-btn");

function menuopen() {
    if (menucontent === "0px") {
        menucontent.style.right = "-370px";
    } else {
        menucontent.style.right = "0px";
    }
}

function closefun(){
    menucontent.style.right = "-370px";
    sidepopup.style.left = "-70px"; 
}
function closefunx(){
    menucontent.style.right = "-370px";
}
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");


function showSection(section) {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    home.style.color="black";
    about.style.color="black";
    service.style.color="black";
    contact.style.color="black";
    section.style.display = "block";
}

function part1() {
    showSection(one);
    menucontent.style.right = "-370px";
    home.style.color="aliceblue";
}

function part2() {
    showSection(two);
    menucontent.style.right = "-370px";
    about.style.color="aliceblue";
}

function part3() {
    showSection(three);
    menucontent.style.right = "-370px";
    service.style.color="aliceblue";
}

function part4() {
    showSection(four);
    menucontent.style.right = "-370px";
    contact.style.color="aliceblue";
}

var sidepopup = document.getElementById("sidepopup");

function closefun2() {
    if (sidepopup.style.left === "0px") {
        sidepopup.style.left = "-70px"; 
        menucontent.style.right = "-370px";
        
    } else {
        sidepopup.style.left = "0px"; 
        menucontent.style.right = "-370px";
    }
}
function closepopup(){
    sidepopup.style.left = "-70px"; 
}


// document.addEventListener('touchstart', (e) => touchStartX = e.changedTouches[0].screenX);
// document.addEventListener('touchend', (e) => {
//     if (e.changedTouches[0].screenX > touchStartX + 50) {
//         document.getElementById("sidepopup").style.left = "0px"; // Open the side navigation
//     }
// });


document.oncontextmenu = function() {
    return false;
};


