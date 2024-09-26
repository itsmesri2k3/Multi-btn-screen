function menuopen() {
    var menucontent = document.getElementById("menu-content");
    var computedRight = window.getComputedStyle(menucontent).getPropertyValue("right");

    if (computedRight === "10px") {
        menucontent.style.right = "-350px";
    } else {
        menucontent.style.right = "10px";
    }
}
