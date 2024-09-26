function menuopen() {
    var menucontent = document.getElementById("menu-content");
    var computedRight = window.getComputedStyle(menucontent).getPropertyValue("right");

    if (computedRight === "0px") {
        menucontent.style.right = "-350px";
    } else {
        menucontent.style.right = "0px";
    }
}

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");


function showSection(section) {
    // Hide all sections
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    home.style.color="black";
    about.style.color="black";
    service.style.color="black";
    contact.style.color="black";
    // Show the selected section
    section.style.display = "block";
}

function part1() {
    showSection(one);
    home.style.color="aliceblue";
}

function part2() {
    showSection(two);
    about.style.color="aliceblue";
}

function part3() {
    showSection(three);
    service.style.color="aliceblue";
}

function part4() {
    showSection(four);
    contact.style.color="aliceblue";
}
