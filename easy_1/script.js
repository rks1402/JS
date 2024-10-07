let friendshipStatus = document.querySelector("h5");
let addButton = document.querySelector("#add");

let flag = 0;

addButton.addEventListener("click", () => {
    if(flag === 0){
        friendshipStatus.innerHTML = "Friends";
        friendshipStatus.style.color = "green";
        addButton.innerHTML = "Remove Friend";
        flag = 1;
    } else{
        friendshipStatus.innerHTML = "Stranger";
        friendshipStatus.style.color = "red";
        addButton.innerHTML = "Add Friend";
        flag = 0;
    }
});

    