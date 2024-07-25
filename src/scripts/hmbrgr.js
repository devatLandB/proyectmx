document.addEventListener('DOMContentLoaded', function () {
  console.log("Hamburger menu script loaded");

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');
  const overlayLinks = document.querySelectorAll('.overlay-link');
  const menuBtns = document.querySelectorAll('.menu-btn a');
  const currentUrl = window.location.pathname;

  const toggleOverlay = () => {
      overlay.classList.toggle('translate-x-full');
  };

  hamburgerBtn?.addEventListener('click', toggleOverlay);
  closeBtn?.addEventListener('click', toggleOverlay);
  overlayLinks.forEach(link => {
      link.addEventListener('click', toggleOverlay);

      // Correctly identify the current URL and add the 'text-blue-500' class
      if (currentUrl === link.getAttribute('href') || currentUrl.startsWith(link.getAttribute('href') + '/')) {
        link.classList.add('text-blue-500');
      }
  });

   // Close the overlay when clicking outside
   document.addEventListener('click', (event) => {
    if (!overlay.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      overlay.classList.remove('translate-x-0');
      overlay.classList.add('translate-x-full');
    }
  });
  // Add 'border-b-2' and 'border-pryctblu' classes to menu buttons if the link matches the current URL
  menuBtns.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentUrl === linkHref || currentUrl.startsWith(linkHref + '/')) {
      link.parentElement.classList.add('border-b-2', 'border-pryctblu');
    }
  });
});
