// ====================== FIXED FAVORITES SYSTEM ======================
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

const FAV_SIDEBAR_WIDTH = "350px";

function saveFavorites() {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setFavoriteButtonIcon(buttonElement, isActive) {
  if (!buttonElement) return;

  const icon = buttonElement.querySelector("i");
  if (!icon) return;

  if (icon.classList.contains("bi")) {
    icon.className = isActive ? "bi bi-heart-fill text-danger" : "bi bi-heart";
    return;
  }

  icon.className = isActive ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart";
}

function updateNavbarHeartColor() {
  const heart = document.querySelector(".visual-fav-btn");
  if (heart) {
    heart.style.color = favoriteItems.length > 0 ? "#ff0000" : "";
  }
}

// Main function used by all buttons
function toggleFavorite(product, buttonElement) {
  const id = parseInt(product.id);
  const existingIndex = favoriteItems.findIndex(item => item.id === id);

  if (existingIndex > -1) {
    favoriteItems.splice(existingIndex, 1);
    setFavoriteButtonIcon(buttonElement, false);
  } else {
    favoriteItems.push({
      id: id,
      name: product.name,
      price: product.price,
      image: product.image || ""
    });

    setFavoriteButtonIcon(buttonElement, true);
  }

  saveFavorites();
  updateNavbarHeartColor();
  renderFavorites();
  syncProductCardButtons();
}

function removeSingleFavorite(id) {
  favoriteItems = favoriteItems.filter(item => item.id !== id);
  saveFavorites();
  updateNavbarHeartColor();
  renderFavorites();
  syncProductCardButtons();
}

// Add this function to your favorites.js
function addAllFavoritesToCart() {
  if (favoriteItems.length === 0) return;

  // Add all to cart
  favoriteItems.forEach(item => {
    if (typeof addToCart === "function") {
      addToCart(item.id, item.name, item.price);
    }
  });

  // Clear favorites
  favoriteItems = [];
  saveFavorites();
  updateNavbarHeartColor();
  renderFavorites();
  syncProductCardButtons();
}

// Update the renderFavorites function to use minimalist icons
function renderFavorites() {
  const container = document.getElementById("favItemsContainer");
  const footer = document.getElementById("favFooterArea"); // New footer ID
  if (!container) return;

  container.innerHTML = "";

  if (favoriteItems.length === 0) {
    container.innerHTML = `<p class="empty-cart-msg">Your favorites list is empty!</p>`;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  favoriteItems.forEach(item => {
    const price = Number(item.price) || 0;
    const imageSrc = item.image || `Assets/Products/product-${item.id}.png`;

    const div = document.createElement("div");
    div.className = "fav-item d-flex align-items-center justify-content-between p-3 border-bottom";
    
    div.innerHTML = `
      <div class="d-flex align-items-center gap-3" style="flex: 1; min-width: 0;">
        <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.name)}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px;">
        <div style="flex: 1; min-width: 0;">
          <h6 class="mb-0" style="font-size: 0.85rem; font-weight: 500;">${escapeHtml(item.name)}</h6>
          <small class="text-muted" style="font-size: 0.75rem;">Rs. ${price.toLocaleString()}</small>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <button onclick="addFavoriteToCart(${item.id}); event.stopImmediatePropagation();" 
                class="border-0 bg-transparent p-0" title="Add to Cart" style="color: #333;">
          <i class="bi bi-bag" style="font-size: 1.1rem;"></i>
        </button>
        
        <button onclick="removeSingleFavorite(${item.id}); event.stopImmediatePropagation();" 
                class="border-0 bg-transparent p-0" title="Remove" style="color: #999;">
          <i class="bi bi-x-lg" style="font-size: 1rem;"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

// Add single favorite item to cart
function addFavoriteToCart(id) {
  const item = favoriteItems.find(fav => fav.id === id);
  if (!item) return;

  if (typeof addToCart === "function") {
    addToCart(item.id, item.name, item.price);
  }

  favoriteItems = favoriteItems.filter(fav => fav.id !== id);
  saveFavorites();
  updateNavbarHeartColor();
  renderFavorites();
  syncProductCardButtons();
}

// Add ALL favorites to cart
function addAllFavoritesToCart() {
  if (favoriteItems.length === 0) return;

  favoriteItems.forEach(item => {
    if (typeof addToCart === "function") {
      addToCart(item.id, item.name, item.price);
    }
  });

  favoriteItems = [];
  saveFavorites();
  updateNavbarHeartColor();
  renderFavorites();
  syncProductCardButtons();
}

function openFavoritesNav() {
  const sidebar = document.getElementById("myFavoritesNav");
  if (sidebar) {
    sidebar.style.width = FAV_SIDEBAR_WIDTH;
    renderFavorites();
  }
}

function closeFavoritesNav() {
  const sidebar = document.getElementById("myFavoritesNav");
  if (sidebar) sidebar.style.width = "0";
}

function syncProductCardButtons() {
  document.querySelectorAll(".fav-btn").forEach(btn => {
    const id = parseInt(btn.getAttribute("data-id"));
    const isFav = favoriteItems.some(item => item.id === id);
    setFavoriteButtonIcon(btn, isFav);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateNavbarHeartColor();
  syncProductCardButtons();
  renderFavorites();
});