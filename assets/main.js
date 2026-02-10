(() => {
  const burger = document.querySelector("[data-burger]");
  const navLinks = document.querySelector("[data-navlinks]");
  const overlay = document.getElementById("navOverlay");

  if (!burger || !navLinks) return;

  let scrollY = 0;
  const isMobile = () => window.matchMedia("(max-width: 920px)").matches;

  const openMenu = () => {
    if (isMobile()) {
      scrollY = window.scrollY || window.pageYOffset;
      document.body.style.top = `-${scrollY}px`;
    }
    document.body.classList.add("nav-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close menu");
  };

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");

    if (isMobile()) {
      const y = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      document.body.style.top = "";
      window.scrollTo(0, y || scrollY);
    }
  };

  const toggleMenu = () => {
    document.body.classList.contains("nav-open") ? closeMenu() : openMenu();
  };

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  if (overlay) overlay.addEventListener("click", closeMenu);
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (!isMobile() && document.body.classList.contains("nav-open")) closeMenu();
  });
})();
