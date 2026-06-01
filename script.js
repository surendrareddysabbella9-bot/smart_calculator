const display = document.getElementById("display");

display.value = localStorage.getItem("calculatorData") || "";

function append(value) {
  display.value += value;

  saveData();
}

function clearDisplay() {
  display.value = "";

  saveData();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);

  saveData();
}

function calculate() {
  try {
    display.value = eval(display.value);

    saveData();
  } catch {
    display.value = "Error";
  }
}

function saveData() {
  localStorage.setItem("calculatorData", display.value);
}
