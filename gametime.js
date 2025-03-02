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

document.getElementById("calculateScoresButton").addEventListener("click", function() {
    let playerOneName = document.getElementById("playerOneName").value;
    let playerOneScore = parseFloat(document.getElementById("playerOneScore").value);
    let playerTwoName = document.getElementById("playerTwoName").value;
    let playerTwoScore = parseFloat(document.getElementById("playerTwoScore").value);

    if (!isNaN(playerOneScore) && !isNaN(playerTwoScore)) {
        let totalScore = playerOneScore + playerTwoScore;
        let playerOnePercentage = ((playerOneScore / totalScore) * 100).toFixed(2);
        let playerTwoPercentage = ((playerTwoScore / totalScore) * 100).toFixed(2);

        alert(`${playerOneName}'s score: ${playerOneScore} (${playerOnePercentage}%)\n${playerTwoName}'s score: ${playerTwoScore} (${playerTwoPercentage}%)`);
    } else {
        alert("Please enter valid scores for both players.");
    }
});
