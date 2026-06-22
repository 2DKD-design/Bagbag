function slideLeft(button) {
  // Find the closest section container, then find the scroll-hide container inside it
  const container = button.closest('.featured-prod').querySelector('.scroll-hide');
  if (container) {
    container.scrollBy({ left: -450, behavior: 'smooth' });
  }
}

function slideRight(button) {
  // Find the closest section container, then find the scroll-hide container inside it
  const container = button.closest('.featured-prod').querySelector('.scroll-hide');
  if (container) {
    container.scrollBy({ left: 450, behavior: 'smooth' });
  }
}