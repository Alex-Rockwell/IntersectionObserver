//////////////////////////
// Change colors of navbar

const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver
  ) {
    entries.forEach(entry => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    })
  }, sectionOneOptions);

  sectionOneObserver.observe(sectionOne);

///////////////////
// Fade-in elements

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
  ) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;       
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
  
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

///////////
// Slide-in

const sliders = document.querySelectorAll('.slide-in');

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});