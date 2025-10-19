const precioInicial = document.querySelector(".precio-inicial");
const cantidad = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");

precio = 400000
precioInicial.innerHTML = precio;

let cantidadActual = 0;

const botones = document.querySelectorAll("button");

botones[0].addEventListener("click", () => {
  cantidadActual++;
  actualizarPantalla();
});

botones[1].addEventListener("click", () => {
  if (cantidadActual > 0) {
    cantidadActual--;
    actualizarPantalla();
  }
});

function actualizarPantalla() {
  cantidad.innerHTML = cantidadActual;
  valorTotal.innerHTML = cantidadActual * precio;
}
