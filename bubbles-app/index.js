let yellow_circle = document.querySelector(".dot-yellow");
let blue_circle = document.querySelector(".dot-blue");
let red_circle = document.querySelector(".dot-red");
let green_circle = document.querySelector(".dot-green");
let reset_button = document.querySelector(".reset-button");
let circle_img_container_1 = document.querySelector(".circle-img-container-1");
let circle_img_container_2 = document.querySelector(".circle-img-container-2");
let circle_img_container_3 = document.querySelector(".circle-img-container-3");
let circle_img_container_4 = document.querySelector(".circle-img-container-4");

yellow_circle.addEventListener("click", () => {
  circle_img_container_1.setAttribute("style", "justify-content:flex-start");
  yellow_circle.setAttribute("style", "background-color: #808080");
});

blue_circle.addEventListener("click", () => {
  circle_img_container_2.setAttribute("style", "justify-content:flex-start");
  blue_circle.setAttribute("style", "background-color: #808080");
});

red_circle.addEventListener("click", () => {
  circle_img_container_3.setAttribute("style", "justify-content:flex-start");
  red_circle.setAttribute("style", "background-color: #808080");
});

green_circle.addEventListener("click", () => {
  circle_img_container_4.setAttribute("style", "justify-content:flex-start");
  green_circle.setAttribute("style", "background-color: #808080");
});

reset_button.addEventListener("click", () => {
  circle_img_container_1.setAttribute("style", "justify-content:space-between");
  yellow_circle.setAttribute("style", "background-color: #FFFF00");
  circle_img_container_2.setAttribute("style", "justify-content:space-between");
  blue_circle.setAttribute("style", "background-color: #0000ff");
  circle_img_container_3.setAttribute("style", "justify-content:space-between");
  red_circle.setAttribute("style", "background-color: #Ff0000");
  circle_img_container_4.setAttribute("style", "justify-content:space-between");
  green_circle.setAttribute("style", "background-color: #00FF00");
});
