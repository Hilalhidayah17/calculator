let display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const operators = ["-", "+", "*", "/", "x"];

let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "AC") {
      result = "";
      display.value = result;
    } else if (e.target.value == "=") {
      result = eval(result.replace(/x/g, "*")).toString();
      display.value = result;
    } else {
      const lastResult = result.slice(-1);
      console.log(lastResult);
      if (
        operators.includes(lastResult) &&
        operators.includes(e.target.value)
      ) {
        return;
      }
      result += e.target.innerHTML;
      display.value = result;
    }
  });
});
