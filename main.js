/* for the particles background */
particlesJS.load('particles-js', 'particles.json')
particlesJS.load('particles-js-2', 'particles.json')
var typed = new Typed('.typed', {
  stringsElement: '.typed-strings ',
  typeSpeed : 30,
  loop: !0,
  backDelay: 2000,
    });

    document.querySelectorAll('.scroll-link').forEach(a => {
      /* e is a mouse event */
      a.addEventListener('click', function(e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

