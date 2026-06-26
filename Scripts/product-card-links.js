function getProductDetailsFromCard(card) {
  const fallbackButton = card.querySelector('[data-id]');
  const id = card.getAttribute('data-id') || fallbackButton?.getAttribute('data-id') || '';
  const name = card.getAttribute('data-name') || fallbackButton?.getAttribute('data-name') || card.querySelector('.card-title, h4, h6')?.textContent?.trim() || '';
  const brand = card.getAttribute('data-brand') || fallbackButton?.getAttribute('data-brand') || card.querySelector('.text-uppercase, .card-text, .price, .card-price, .card-body p')?.textContent?.trim() || '';
  const price = card.getAttribute('data-price') || fallbackButton?.getAttribute('data-price') || card.querySelector('.price, .card-price')?.textContent?.replace(/[^0-9.]/g, '') || '';
  const image = card.getAttribute('data-image') || fallbackButton?.getAttribute('data-image') || card.querySelector('img')?.getAttribute('src') || '';
  const description = card.getAttribute('data-description') || fallbackButton?.getAttribute('data-description') || '';

  return { id, name, brand, price, image, description };
}

function hydrateCardMetadata(card) {
  const fallbackButton = card.querySelector('[data-id]');
  if (!fallbackButton) return;

  if (!card.getAttribute('data-id')) {
    card.setAttribute('data-id', fallbackButton.getAttribute('data-id') || '');
  }
  if (!card.getAttribute('data-name')) {
    const nameFromButton = fallbackButton.getAttribute('data-name');
    if (nameFromButton) {
      card.setAttribute('data-name', nameFromButton);
    }
  }
  if (!card.getAttribute('data-price')) {
    const priceFromButton = fallbackButton.getAttribute('data-price');
    if (priceFromButton) {
      card.setAttribute('data-price', priceFromButton);
    }
  }
  if (!card.getAttribute('data-image')) {
    const imageFromButton = fallbackButton.getAttribute('data-image');
    if (imageFromButton) {
      card.setAttribute('data-image', imageFromButton);
    }
  }
}

function attachCardNavigation(card) {
  if (card.dataset.linkAttached === 'true') return;

  card.dataset.linkAttached = 'true';
  card.style.cursor = 'pointer';
  hydrateCardMetadata(card);

  card.addEventListener('click', function (event) {
    const interactiveElement = event.target.closest('button, a, input, select, textarea, .btn');
    if (interactiveElement) return;

    const product = getProductDetailsFromCard(card);
    if (!product.id) return;

    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.assign(`product-detail.html?id=${product.id}`);
  });
}

function initCardNavigation() {
  document.querySelectorAll('.product-card, .card-summer').forEach(attachCardNavigation);
}

document.addEventListener('DOMContentLoaded', initCardNavigation);
const observer = new MutationObserver(initCardNavigation);
observer.observe(document.body, { childList: true, subtree: true });
