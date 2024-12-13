const openMenuEl = document.getElementById("bars");
const closemenuEl = document.getElementById("cancel");
const navbarEl = document.querySelector("nav");

openMenuEl.addEventListener("click", () => {
  navbarEl.style.display = "flex";
  openMenuEl.style.display = "none";
  closemenuEl.style.display = "block";
});

closemenuEl.addEventListener("click", () => {
  navbarEl.style.display = "none";
  openMenuEl.style.display = "block";
  closemenuEl.style.display = "none";
});

