document.getElementById("changeStyleButton").addEventListener("click", function() {
    document.getElementById("paragraph").style.color = "#ff5722";
    document.getElementById("paragraph").style.fontWeight = "bold";
});

document.getElementById("promptButton").addEventListener("click", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("paragraph").innerHTML = `Hello, ${userName}! Welcome to our interactive page!`;
    }
});

document.getElementById("calculateBillButton").addEventListener("click", function() {
    let totalBill = parseFloat(prompt("Enter the total bill amount:"));
    if (!isNaN(totalBill)) {
        let perPerson = (totalBill / 4).toFixed(2);
        alert(`Each person should pay: $${perPerson}`);
    } else {
        alert("Please enter a valid number for the total bill amount.");
    }
});
