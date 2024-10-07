let container = document.querySelector("#container");
let love = document.querySelector("i");

container.addEventListener("dblclick", () => {
    love.style.opacity = "0.75";
    love.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(() => {
        love.style.opacity = "0";
        // love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000);
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    },1500);
});