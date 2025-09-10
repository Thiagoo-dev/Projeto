// Botão do menu hamburguer
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav.menu");
const navLinks = document.querySelectorAll("nav.menu a");

// Abre/fecha o menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Fecha o menu quando clicar em um link e faz scroll suave
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 120, // ajusta o espaçamento do header fixo
        behavior: "smooth"
      });
    }
    navMenu.classList.remove("open");
  });
});
