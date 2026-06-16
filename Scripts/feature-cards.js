
function slideLeft() {
  const container = document.getElementById('scrollCards');
  container.scrollBy({ left: -450, behavior: 'smooth' });
}

function slideRight() {
  const container = document.getElementById('scrollCards');
  container.scrollBy({ left: 450, behavior: 'smooth' });
}
