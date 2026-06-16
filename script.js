const button = document.getElementById("calculate-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    let weight = parseFloat(document.getElementById("weight").value);
    const weightUnit = document.getElementById("weightUnit").value;

    let height = parseFloat(document.getElementById("height").value);
    const heightUnit = document.getElementById("heightUnit").value;

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter valid values.";
        return;
    }

    // Weight conversion
    if (weightUnit === "lb") {
        weight = weight * 0.453592;
    }

    let heightInMeters;

    // Height conversion
    if (heightUnit === "cm") {
        heightInMeters = height / 100;
    } 
    else if (heightUnit === "ftin") {
        let feet = Math.floor(height);
        let inches = Math.round((height - feet) * 100);

        let totalInches = (feet * 12) + inches;
        heightInMeters = totalInches * 0.0254;
    }

    const bmi = weight / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    result.innerHTML = `
        BMI: <strong>${bmi.toFixed(2)}</strong><br>
        Category: <strong>${category}</strong>
    `;
});