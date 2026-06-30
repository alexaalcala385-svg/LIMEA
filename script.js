// ===============================
// LIMÉA
// ===============================

console.log("Bienvenido a Liméa");

// ===============================
// MENÚ PARA CELULAR
// ===============================

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("activo");
}

// ===============================
// VENTANAS MODALES
// ===============================

function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

// Cerrar al hacer clic fuera de la ventana
window.onclick = function(event) {

    const modales = document.querySelectorAll(".modal");

    modales.forEach(function(modal){

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

};

// Cerrar con la tecla ESC
document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        const modales = document.querySelectorAll(".modal");

        modales.forEach(function(modal){

            modal.style.display = "none";

        });

    }

});

console.log("Sitio Liméa cargado correctamente");