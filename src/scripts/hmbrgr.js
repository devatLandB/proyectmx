

  document.addEventListener('DOMContentLoaded', function () {
    console.log("Hamburger menu script loaded");

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const overlayLinks = document.querySelectorAll('.overlay-link');
    

    const openOverlay = () => {
      overlay.classList.remove('translate-x-full');
      overlay.classList.add('translate-x-0');
    };

    const closeOverlay = () => {
      overlay.classList.remove('translate-x-0');
      overlay.classList.add('translate-x-full');
    };

    hamburgerBtn?.addEventListener('click', openOverlay);
    closeBtn?.addEventListener('click', closeOverlay);
    overlayLinks.forEach(link => {
      link.addEventListener('click', closeOverlay);
      
      
      if (link.href === window.location.href) {
        link.classList.add('text-blue-500'); 
      }
      

    });
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    const menuBtns = document.querySelectorAll('.menu-btn a');
    const currentUrl = window.location.pathname;

    menuBtns.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentUrl === linkHref || currentUrl.startsWith(linkHref)) {
            link.parentElement.classList.add('border-b-2', 'border-pryctblu');
        }
    });
});