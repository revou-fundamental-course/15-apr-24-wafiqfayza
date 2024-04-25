//Ini file JavaScript

function convert() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var temperature = parseFloat(document.getElementById("temperature").value);

    let convertedValue;
    let resultUnit;

    switch (fromUnit) {
      case "C":
        if (toUnit === "F") {
          convertedValue = (temperature * 9) / 5 + 32;
          resultUnit = "°F";
          document.getElementById("formula").textContent = `(${temperature}° * 1.8) + 32 = ${convertedValue}°F`;
        } else {
          convertedValue = temperature;
          resultUnit = "°C";
          document.getElementById("formula").textContent = `${temperature}°C`;
        }
        break;
  
      case "F":
        if (toUnit === "C") {
          convertedValue = ((temperature - 32) / 5) * 9;
          resultUnit = "°C";
          document.getElementById("formula").textContent = `((${temperature}° - 32) / 1.8 = ${convertedValue}°C`;
        } else {
          convertedValue = temperature;
          resultUnit = "°F";
          document.getElementById("formula").textContent = `${temperature}°F`;
        }
        break;
    }
    document.getElementById("result").value = convertedValue.toFixed(0) + " " + resultUnit;
  }