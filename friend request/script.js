var btn = document.querySelector("button");
var h5 = document.querySelector("h5");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Check the current state and toggle accordingly
    if (h5.innerHTML === "Strangers") {
        // Change to "Friends" state
        h5.innerHTML = "Friends";
        h5.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.setAttribute("aria-label", "Remove Friend"); // Accessibility
    } else {
        // Change to "Strangers" state
        h5.innerHTML = "Strangers";
        h5.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.setAttribute("aria-label", "Add Friend"); // Accessibility
    }
});

