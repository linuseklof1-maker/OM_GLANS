const hamburgare = document.querySelector(".hamburgare");
const nav = document.querySelector(".nav");

if (hamburgare) {
  hamburgare.addEventListener("click", () => {
    nav.classList.toggle("nav-oppen");
    const oppen = nav.classList.contains("nav-oppen");
    hamburgare.setAttribute("aria-expanded", oppen);
  });
}