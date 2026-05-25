// ======================================================
// VARIABLES GENERALES
// ======================================================

const body = document.body;

// ======================================================
// FILTRO / DROPDOWN FULLSCREEN
// ======================================================

const filterBtn = document.getElementById("filterBtn");
const filterDropdown = document.getElementById("filterDropdown");
const dropdownClose = document.getElementById("dropdownClose");

// Abrir dropdown
function openDropdown() {
    filterDropdown.classList.add("active");
    body.style.overflow = "hidden";
}

// Cerrar dropdown
function closeDropdown() {
    filterDropdown.classList.remove("active");
    body.style.overflow = "auto";
}

// Toggle botón categorías
filterBtn.addEventListener("click", () => {
    if (filterDropdown.classList.contains("active")) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

// Botón cerrar 
dropdownClose.addEventListener("click", () => {
    closeDropdown();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Cerrar dropdown con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDropdown();
    }
});

// ======================================================
// SCROLL DINÁMICO A SECCIÓN
// ======================================================

function scrollToSection(targetId) {
    const section = document.getElementById(targetId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Agregar evento a todos los items del filtro
filterDropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.dataset.target;
        closeDropdown();
        scrollToSection(targetId);
    });
});

// ======================================================
// MODALES UNIFICADOS
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ===== VINOS =====
    const modalVinos = document.getElementById("modalVinos");
    const modalImgVinos = document.getElementById("modalImgVinos");
    const closeModalVinos = document.getElementById("closeModalVinos");

    modalVinos.style.display = "none";

    document.querySelectorAll(".vino-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalVinos.style.display = "flex";
            modalImgVinos.src = img.src;
        });
    });

    closeModalVinos.addEventListener("click", () => {
        modalVinos.style.display = "none";
    });

    // ===== HOSTIAS =====
    const modalHostias = document.getElementById("modalHostias");
    const modalImgHostias = document.getElementById("modalImgHostias");
    const closeModalHostias = document.getElementById("closeModalHostias");

    modalHostias.style.display = "none";

    document.querySelectorAll(".hostia-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalHostias.style.display = "flex";
            modalImgHostias.src = img.src;
        });
    });

    closeModalHostias.addEventListener("click", () => {
        modalHostias.style.display = "none";
    });

    // ===== VELAS =====
    const modalVelas = document.getElementById("modalVelas");
    const modalImgVelas = document.getElementById("modalImgVelas");
    const closeModalVelas = document.getElementById("closeModalVelas");

    modalVelas.style.display = "none";

    document.querySelectorAll(".vela-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalVelas.style.display = "flex";
            modalImgVelas.src = img.src;
        });
    });

    closeModalVelas.addEventListener("click", () => {
        modalVelas.style.display = "none";
    });

    // ===== CAMANDULAS =====
    const modalCamandulas = document.getElementById("modalCamandulas");
    const modalImgCamandulas = document.getElementById("modalImgCamandulas");
    const closeModalCamandulas = document.getElementById("closeModalCamandulas");

    modalCamandulas.style.display = "none";

    document.querySelectorAll(".camandula-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalCamandulas.style.display = "flex";
            modalImgCamandulas.src = img.src;
        });
    });

    closeModalCamandulas.addEventListener("click", () => {
        modalCamandulas.style.display = "none";
    });

    // ===== LLAVEROS =====
    const modalllaveros = document.getElementById("modalLLaveros");
    const modalImgllaveros = document.getElementById("modalImgLLaveros");
    const closeModalllaveros = document.getElementById("closeModalLLaveros");

    modalllaveros.style.display = "none";

    document.querySelectorAll(".llavero-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalllaveros.style.display = "flex";
            modalImgllaveros.src = img.src;
        });
    });

    closeModalllaveros.addEventListener("click", () => {
        modalllaveros.style.display = "none";
    });

    // ===== ELEMENTOS LITURGICOS =====
    const modalliturgicos = document.getElementById("modalLiturgicos");
    const modalImgliturgicos = document.getElementById("modalImgLiturgicos");
    const closeModalliturgicos = document.getElementById("closeModalLiturgicos");

    modalliturgicos.style.display = "none";

    document.querySelectorAll(".liturgico-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalliturgicos.style.display = "flex";
            modalImgliturgicos.src = img.src;
        });
    });

    closeModalliturgicos.addEventListener("click", () => {
        modalliturgicos.style.display = "none";
    });

     // ===== LIBROS =====
    const modallibros = document.getElementById("modalLibros");
    const modalImglibros = document.getElementById("modalImgLibros");
    const closeModallibros = document.getElementById("closeModalLibros");

    modallibros.style.display = "none";

    document.querySelectorAll(".libro-card img").forEach(img => {
        img.addEventListener("click", () => {
            modallibros.style.display = "flex";
            modalImglibros.src = img.src;
        });
    });

    closeModallibros.addEventListener("click", () => {
        modallibros.style.display = "none";
    });

    // ===== VASOS SAGRADOS =====
    const modalvasos = document.getElementById("modalVasos");
    const modalImgvasos = document.getElementById("modalImgVasos");
    const closeModalvasos = document.getElementById("closeModalVasos");

    modalvasos.style.display = "none";

    document.querySelectorAll(".vaso-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalvasos.style.display = "flex";
            modalImgvasos.src = img.src;
        });
    });

    closeModalvasos.addEventListener("click", () => {
        modalvasos.style.display = "none";
    });

    // ===== CRISTOS =====
    const modalcristos = document.getElementById("modalCristos");
    const modalImgcristos = document.getElementById("modalImgCristos");
    const closeModalcristos = document.getElementById("closeModalCristos");

    modalcristos.style.display = "none";

    document.querySelectorAll(".cristo-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalcristos.style.display = "flex";
            modalImgcristos.src = img.src;
        });
    });

    closeModalcristos.addEventListener("click", () => {
        modalcristos.style.display = "none";
    });

    // ===== ESTAMPAS =====
    const modalestampas = document.getElementById("modalEstampas");
    const modalImgestampas = document.getElementById("modalImgEstampas");
    const closeModalestampas = document.getElementById("closeModalEstampas");

    modalestampas.style.display = "none";

    document.querySelectorAll(".estampa-card img").forEach(img => {
        img.addEventListener("click", () => {
            modalestampas.style.display = "flex";
            modalImgestampas.src = img.src;
        });
    });

    closeModalestampas.addEventListener("click", () => {
        modalestampas.style.display = "none";
    });

    // ===== CERRAR TODOS LOS MODALES CON ESC =====
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalVinos.style.display = "none";
            modalHostias.style.display = "none";
            modalVelas.style.display = "none";
            modalCamandulas.style.display = "none";
            modalliturgicos.style.display = "none";
            modallibros.style.display = "none";
            modalvasos.style.display = "none";
            modalcristos.style.display = "none";
            modalestampas.style.display = "none";

        }
    });

});