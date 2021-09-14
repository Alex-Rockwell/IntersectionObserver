const images = document.querySelectorAll('[data-src]');
const imageOptions = {
  threshold: 0,
  rootMargin: '0px 0px 300px 0px',
};

function preloadImege(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImege(entry.target);
      imageObserver.unobserve(entry.target);
    }
  });
}, imageOptions);

images.forEach(img => {
  imageObserver.observe(img);
})