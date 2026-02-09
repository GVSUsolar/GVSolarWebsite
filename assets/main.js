document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("[data-burger]");
  const navLinks = document.querySelector("[data-navlinks]");

  if (!burger || !navLinks) return;

  burger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    burger.classList.toggle("open", isOpen);

    // Accessibility
    burger.setAttribute("aria-expanded", isOpen);
  });
});
