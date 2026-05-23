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

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

});