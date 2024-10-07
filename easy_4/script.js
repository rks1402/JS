let elem = document.querySelectorAll(".elem");

elem.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.childNodes[3].style.opacity = 1;
    });
    element.addEventListener("mouseleave", () => {
        element.childNodes[3].style.opacity = 0;
    });
    element.addEventListener("mousemove", (dire) => {
        element.childNodes[3].style.left = dire.x + "px";
    });
})
