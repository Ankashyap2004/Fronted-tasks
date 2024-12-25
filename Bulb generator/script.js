const mySwitch = document.querySelector(".switch");
const bulb = document.querySelector(".circle");
const myMain = document.querySelector(".main");
const switchOn = document.querySelector(".switchon");

let isOn = false; // Simplified toggle state

mySwitch.addEventListener("click", () => {
    isOn = !isOn; // Toggle the state

    if (isOn) {
        bulb.style.backgroundColor = "black";
        mySwitch.textContent = "ON";
        myMain.style.backgroundColor = "#555";
        switchOn.style.transform = "translateX(50px)";
    } else {
        bulb.style.backgroundColor = "yellow";
        mySwitch.textContent = "OFF";
        myMain.style.backgroundColor = "rgb(190, 190, 190)";
        switchOn.style.transform = "translateX(0)";
    }
});
