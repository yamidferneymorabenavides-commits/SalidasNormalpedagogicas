/* =========================
   MODAL DE IMÁGENES
========================= */

const imagenes = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(imagen => {

    imagen.addEventListener("click", () => {

        modal.style.display = "block";
        imagenGrande.src = imagen.src;

    });

});

/* CERRAR MODAL */

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

});

/* CERRAR AL DAR CLICK AFUERA */

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* =========================
   CARRUSEL ENCABEZADO
========================= */

const slides = document.querySelectorAll('.carrusel-header img');

let index = 0;

setInterval(() => {

    slides[index].classList.remove('active');

    index = (index + 1) % slides.length;

    slides[index].classList.add('active');

}, 4000);
