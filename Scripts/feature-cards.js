function getScrollAmount() {
  return window.innerWidth <= 480 ? 280 : 450;
}

function slideLeft(button) {
  const container = button.closest('.featured-prod').querySelector('.scroll-hide');
  if (container) {
    container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  }
}

function slideRight(button) {
  const container = button.closest('.featured-prod').querySelector('.scroll-hide');
  if (container) {
    container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  }
}