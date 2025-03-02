document.getElementById("promptButton").addEventListener("click", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("paragraph").innerHTML = `Hello, ${userName}! Welcome to our interactive page!`;
    }
});

document.getElementById("changeStyleButton").addEventListener("click", function() {
    document.getElementById("paragraph").style.color = "#ff5722";
    document.getElementById("paragraph").style.fontWeight = "bold";
});
