alert("main.js loaded");

(() => {
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

  // Click works everywhere
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // iOS reliability (optional but helps)
  burger.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggleMenu();
  }, { passive: false });

  if (overlay) overlay.addEventListener("click", closeMenu);

  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
