// Compound Interest Calculator

document.getElementById("investment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    var amountField = document.getElementById("amount");
    var timeField = document.getElementById("time");
    var multiplierField = document.getElementById("multiplier");
    var resultField = document.getElementById("result");

    // Parse input values
    var monthlyInvestment = parseFloat(amountField.value) || 0;
    var months = parseInt(timeField.value) || 0;
    var monthlyReturn = parseFloat(multiplierField.value) / 100 || 0;

    // Calculate compound interest
    var total = 0;
    for (var i = 0; i < months; i++) {
        total = (total + monthlyInvestment) * (1 + monthlyReturn);
    }

    // Display the result
    resultField.textContent = total.toFixed(2); // Round to 2 decimal places
});
