


/* Mobile sidebar toggle for hidden sidebar navigation
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const sidebarOverlay = document.querySelector('#sidebarOverlay');

  function setMenuState(isOpen) {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.toggle('active', isOpen);
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (sidebarOverlay) {
      sidebarOverlay.classList.toggle('visible', isOpen);
    }
  }

  function toggleMenu() {
    if (!navLinks) return;
    setMenuState(!navLinks.classList.contains('active'));
  }

  function closeMenu() {
    setMenuState(false);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});*/