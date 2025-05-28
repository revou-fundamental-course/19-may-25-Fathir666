document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen DOM
  const convertButton = document.getElementById("btnConvert");
  const resetButton = document.getElementById("btnReset");
  const inputTemperature = document.getElementById("inputTemperature");
  const outputResult = document.getElementById("outputResult");
  const explanation = document.getElementById("explanation");

  // Event saat tombol convert diklik
  convertButton.addEventListener("click", function () {
    const input = inputTemperature.value.trim(); // Ambil nilai input

    // Validasi jika kosong
    if (input === "") {
      alert("Please enter a temperature in Celsius.");
      outputResult.textContent = "Please enter a temperature first.";
      explanation.innerHTML = "\\( T_{(°F)} = (T_{(°C)} \\times \\frac{9}{5}) + 32 \\)";
      MathJax.typesetPromise([explanation]).catch(console.error);
      return;
    }

    const celsius = parseFloat(input); // Konversi ke angka

    // Validasi jika bukan angka
    if (isNaN(celsius)) {
      outputResult.textContent = "Please enter a valid number.";
      explanation.innerHTML = "\\( T_{(°F)} = (T_{(°C)} \\times \\frac{9}{5}) + 32 \\)";
      MathJax.typesetPromise([explanation]).catch(console.error);
      return;
    }

    // Perhitungan konversi
    const fahrenheit = (celsius * 9 / 5) + 32;
    const decimalFactor = (9 / 5).toFixed(2); // 1.80
    const step1 = (celsius * (9 / 5)).toFixed(2);

    // Tampilkan hasil
    outputResult.textContent = `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;

    // Penjelasan proses konversi
    explanation.innerHTML = `
      <p><strong>Method 1 (Using Fraction 9/5):</strong><br />
      \\( T_{(°F)} = T_{(°C)} \\times \\frac{9}{5} + 32 \\)</p>
      <p>\\[
        T_{(°F)} = ${celsius} \\times \\frac{9}{5} + 32 = ${step1} + 32 = ${fahrenheit.toFixed(2)}
      \\]</p>
      <p><strong>Method 2 (Using Decimal Factor):</strong><br />
      \\( \\frac{9}{5} = ${decimalFactor} \\), so we use:</p>
      <p>\\[
        T_{(°F)} = ${celsius} \\times ${decimalFactor} + 32 = ${step1} + 32 = ${fahrenheit.toFixed(2)}
      \\]</p>
    `;

    // Render ulang MathJax
    MathJax.typesetPromise([explanation]).catch(console.error);
  });

  // Event saat tombol reset diklik
  resetButton.addEventListener("click", function () {
    inputTemperature.value = "";
    outputResult.textContent = "";
    explanation.innerHTML = "\\( T_{(°F)} = (T_{(°C)} \\times \\frac{9}{5}) + 32 \\)";
    MathJax.typesetPromise([explanation]).catch(console.error);
  });
});
