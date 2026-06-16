let heightInput = document.getElementById("height").value;

// convert to string (IMPORTANT)
heightInput = heightInput.toString();

let feet = 0;
let inches = 0;

// split at decimal
if (heightInput.includes(".")) {
    let parts = heightInput.split(".");

    feet = parseInt(parts[0]);
    inches = parseInt(parts[1]); // IMPORTANT FIX

    // handle edge case: "5.9" = 5 ft 9 in
    // "5.10" = 5 ft 10 in (NOT 100)
    if (parts[1].length === 1) {
        inches = parseInt(parts[1]);
    }
    else if (parts[1].length === 2) {
        inches = parseInt(parts[1]);
    }
}
else {
    feet = parseInt(heightInput);
    inches = 0;
}

// convert to meters
let totalInches = (feet * 12) + inches;
let heightInMeters = totalInches * 0.0254;
