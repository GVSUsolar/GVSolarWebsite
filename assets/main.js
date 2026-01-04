// Mobile nav toggle (simple)
const burger = document.querySelector("[data-burger]");
const navLinks = document.querySelector("[data-navlinks]");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    // quick inline open behavior for small screens
    if (navLinks.classList.contains("open")) {
      navLinks.style.flexWrap = "wrap";
      navLinks.style.justifyContent = "center";
    } else {
      navLinks.style.flexWrap = "";
      navLinks.style.justifyContent = "";
    }
  });
}
