document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("[data-burger]");
  const navLinks = document.querySelector("[data-navlinks]");
  const overlay = document.getElementById("navOverlay");

  if (!burger || !navLinks) return;

  const openMenu = () => {
    document.body.classList.add("nav-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close menu");
  };

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  };

  const toggleMenu = () => {
    document.body.classList.contains("nav-open") ? closeMenu() : openMenu();
  };

  // Toggle on burger click
  burger.addEventListener("click", toggleMenu);

  // Close when clicking the overlay
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Close when clicking a nav link (mobile UX)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
