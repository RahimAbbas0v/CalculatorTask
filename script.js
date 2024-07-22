const display = document.querySelector("#display");
function appendToDisplay(num) {
  display.value += num;
}
function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function double() {
  display.value = eval(display.value) + eval(display.value);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
