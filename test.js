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
