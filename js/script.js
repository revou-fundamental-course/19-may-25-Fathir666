document.addEventListener("DOMContentLoaded", function() {
  const Tombol = document.getElementById("btnKonversi");

Tombol.addEventListener("click", function() {
  const suhuInput = document.getElementById("inputSuhu").value;
  const pilihan = document.getElementById("konversiKe").value;
  const hasilOutput = document.getElementById("outputHasil");
  const penjelasan = document.getElementById("penjelasan");

  if (suhuInput === "") {
    hasilOutput.textContent = "Silakan masukkan suhu terlebih dahulu.";
    penjelasan.textContent = "";
    return;
  }

  const suhu = parseFloat(suhuInput);
  let hasil = 0;
  let cara = "";

  if (pilihan === "celcius") {
    hasil = (suhu - 32) * 5 / 9;
    cara = `(${suhu}°F - 32) × 5/9 = ${hasil.toFixed(2)}°C`;
    hasilOutput.textContent = `${hasil.toFixed(2)}°C`;
  } else if (pilihan === "fahrenheit") {
    hasil = (suhu * 9 / 5) + 32;
    cara = `(${suhu}°C × 9/5) + 32 = ${hasil.toFixed(2)}°F`;
    hasilOutput.textContent = `${hasil.toFixed(2)}°F`;
  }

  penjelasan.textContent = cara;
});
});

