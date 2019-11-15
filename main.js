/* for the particles background */
particlesJS.load('particles-js', 'particles.json')
particlesJS.load('particles-js-2', 'particles.json')
const typed = new Typed('.typed', {
  stringsElement: '.typed-strings ',
  typeSpeed : 30,
  loop: !0,
  backDelay: 2000,
    });


    // assignment requirement complete by implementing a smooth
    // scroll for my links
    document.querySelectorAll('.scroll-link').forEach(a => {
      /* e is a mouse event */
      a.addEventListener('click', function(e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


  // making a back to top button which appears after user has scrolled
  // past the first screen, which takes them back to the top
  mybutton = document.querySelector(".my-button");

  // When the user scrolls down 70px from the top of the document, show the button
  window.onscroll = () => {scrollFunction()};
  
  function scrollFunction() {
    /* make it fit for all browsers hence the || :: this means if
    user scrolls over 50px, this button will start showing*/
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }