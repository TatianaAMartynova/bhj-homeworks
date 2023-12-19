document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');
  
    function checkScroll() {
      revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight / 2) {
          element.classList.add('reveal_active');
        } else {
          element.classList.remove('reveal_active');
        }
      });
    }
  
    checkScroll();
  
    window.addEventListener('scroll', function () {
      checkScroll();
    });
  });
  