let sliderInner = document.querySelector(".slider-contenedor");

let index = 1;
setInterval(() => {
  let porcentaje = index * -100;
  sliderInner.style.transform = "translateX(" + porcentaje + "%)";
  index++;
  if (index == 2) {
    index = 0;
  }
}, 4000);
