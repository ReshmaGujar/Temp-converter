document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let result;

        if (isNaN(temperature)) {
            result = "Please enter a valid number.";
        } else {
            if (unit === "celsius") {
                const fahrenheit = (temperature * 9/5) + 32;
                result = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
            } else {
                const celsius = (temperature - 32) * 5/9;
                result = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
            }
        }

        resultElement.textContent = `Result: ${result}`;
    });
});
