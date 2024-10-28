document.getElementById("investment-form").addEventListener("submit", function(event) {
    
    event.preventDefault();

    var amountField = document.getElementById("amount");
    var timeField = document.getElementById("time");
    var multiplierField = document.getElementById("multiplier");
    var resultField = document.getElementById("result");

    var monthlyInvestment = parseFloat(amountField.value) || 0;
    var months = parseInt(timeField.value) || 0;
    var yearlyReturn = parseFloat(multiplierField.value) / 100 || 0;
    var monthlyReturn = yearlyReturn / 12;

    var total = 0;

    for (var i = 0; i < months; i++) {
        total = (total + monthlyInvestment) * (1 + monthlyReturn);
    }

    resultField.textContent = total.toFixed(2);
});
