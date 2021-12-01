let btnclose = document.querySelector("#exit");

let tab;

btnclose.addEventListener("click", () => {
  tab = window.close("");
});

let btnclear = document.querySelector("button");
let input = document.querySelectorAll("input");

btnclear.addEventListener("click", () => {
  input.forEach((input) => (input.value = ""));
});

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

celsius.oninput = () => {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
};
