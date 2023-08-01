const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value === "C") {
      display.textContent = "0";
    } else if (value === "del") {
      display.textContent = display.textContent.slice(0, -1);
      if (display.textContent === "") {
        display.textContent = "0";
      }
    } else if (value === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch (e) {
        display.textContent = "Error";
      }
    } else if (value === "+/-") {
      if (display.textContent[0] === "-") {
        display.textContent = display.textContent.slice(1);
      } else {
        display.textContent = "-" + display.textContent;
      }
    } else if (value === "%") {
      try {
        const result = eval(display.textContent);
        display.textContent = result / 100;
      } catch (e) {
        display.textContent = "Error";
      }
    } else {
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
