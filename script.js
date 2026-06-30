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
// ===== MODO OSCURO =====

const botonModo = document.getElementById("modoOscuro");

if (botonModo) {

    // Mantener el modo al cambiar de página
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
        botonModo.textContent = "☀️";
    }

    botonModo.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
            botonModo.textContent = "☀️";
        } else {
            localStorage.setItem("modo", "claro");
            botonModo.textContent = "🌙";
        }

    });

}