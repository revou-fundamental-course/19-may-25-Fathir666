document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("btnConvert");
  const resetButton = document.getElementById("btnReset");
  const inputTemperature = document.getElementById("inputTemperature");
  const outputResult = document.getElementById("outputResult");
  const explanation = document.getElementById("explanation");

  convertButton.addEventListener("click", function () {
    const input = inputTemperature.value.trim();

    if (input === "") {
      alert("Please enter a temperature in Celsius.");
      outputResult.textContent = "Please enter a temperature first.";
      explanation.textContent = "";
      return;
    }

    const celsius = parseFloat(input);
    if (isNaN(celsius)) {
      outputResult.textContent = "Please enter a valid number.";
      explanation.textContent = "";
      return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    outputResult.textContent = `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;

    explanation.innerHTML = `
  <p>
    Using the temperature conversion formula:
    \\( T_{(°F)} = (T_{(°C)} \\times \\frac{9}{5}) + 32 \\),
    we substitute the Celsius value into the formula:
  </p>
  <p>
    \\[
      T_{(°F)} = ${celsius} \\times \\frac{9}{5} + 32 = ${fahrenheit.toFixed(2)}
    \\]
  </p>
`;

    if (window.MathJax) {
      MathJax.typesetPromise([explanation]).catch(function (err) {
        console.error("MathJax typeset error:", err);
      });
    }
  });

  resetButton.addEventListener("click", function () {
    inputTemperature.value = "";
    outputResult.textContent = "";
    explanation.innerHTML = `\\( T_{(°F)} = (T_{(°C)} \\times \\frac{9}{5}) + 32 \\)`;

    if (window.MathJax) {
      MathJax.typesetPromise([explanation]).catch(function (err) {
        console.error("MathJax reset error:", err);
      });
    }
  });
});
