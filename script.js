const display = document.getElementById("display");

function displayButtons(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function swapSigns() {
  display.value *= -1;
}
